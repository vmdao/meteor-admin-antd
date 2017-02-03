import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Switch, Select, Button, Upload } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import ImageFiles from '../../../../api/ImageFiles';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickUpload = this.handleClickUpload.bind(this);
    }

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    beforeUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
    }

    handleClickUpload(info) {
        if (info.file.status === 'done') {
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
            this.upload(info.file.originFileObj);
        }
    }

    upload(file) {
        ImageFiles.insert(file, function (error, fileObj) {
            if (error) {
                console.log("Upload failed... please try again.");
            } else {
                console.log('Upload succeeded!', fileObj);
                console.log(ImageFiles.find({ _id: "Rigyf36k4KAXSTjja" }).fetch());
            }
        })
        // ImageFiles.insert({
        //     file: file,
        //     streams: 'dynamic',
        //     chunkSize: 'dynamic',
        //     onUploaded: function (error, fileObj) {
        //         console.log(fileObj)
        //         if (error) {
        //             alert(`Error during upload: ${error}, Upload again`);
        //         } else {
        //             alert(`File ${fileObj.name} successfully uploaded.`);
        //         }
        //     },
        // });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (err) return;
            Meteor.call('logoStyles.create', values, (err, res) => {
                if (err) {
                    this.setState({
                        errors: [].concat(err),
                    });
                    return;
                }
                alert('OK!')
            });

        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 10 },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                span: 5,
                offset: 5,
            },
        };
        const imageUrl = this.state.imageUrl || null;
        return (
            <Form onSubmit={this.handleSubmit} >
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Code
                            <Tooltip title="Code is education">  <Icon type="question-circle-o" /></Tooltip>
                        </span>
                    )}
                    hasFeedback
                >
                    {getFieldDecorator('code', {
                        rules: [{ required: true, message: 'Please input your code!' }],
                    })(
                        <Input />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Feature"
                >
                    {getFieldDecorator('upload', {
                        valuePropName: 'file',
                    })(
                        <Upload
                            className="avatar-uploader"
                            name="avatar"
                            showUploadList={false}
                            action="/upload.do"
                            beforeUpload={this.beforeUpload}
                            onChange={this.handleClickUpload}
                        >
                            {
                                imageUrl ?
                                    <img src={imageUrl} alt="" className="avatar" /> :
                                    <Icon type="plus" className="avatar-uploader-trigger" />
                            }
                        </Upload>
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Name
                            <Tooltip title="Name is Education">  <Icon type="question-circle-o" /></Tooltip>
                        </span>
                    )}
                    hasFeedback
                >
                    {getFieldDecorator('name', {
                    })(
                        <Input />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Keyword
                            <Tooltip title="Keyword is education, traning">  <Icon type="question-circle-o" /></Tooltip>
                        </span>
                    )}
                    hasFeedback
                >
                    {getFieldDecorator('keyword', {
                    })(
                        <Input />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Active"
                >
                    {getFieldDecorator('active', { initialValue: false })(
                        <Switch checkedChildren='On' unCheckedChildren='Off' />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">Create</Button>
                </FormItem>
            </Form >
        );
    }
}

export default Form.create()(Create);