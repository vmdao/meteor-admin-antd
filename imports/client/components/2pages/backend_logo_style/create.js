import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Switch, Select, Button, Upload } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import ImageFiles from '../../../../api/ImageFiles';

class Create extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.normFile = this.handleSubmit.bind(this);
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

    normfile(e) {
        console.log(e)
        if (Array.isArray(e)) {
            return e;
        }
        console.log(123, e.file.originFileObj);
        // Meteor.call('imageFiles.create', e.file.originFileObj, (data) => {
        //     console.log(12345, data)
        // })
        let uploadInstance = ImageFiles.insert({
            file: e.file.originFileObj,
            streams: 'dynamic',
            chunkSize: 'dynamic',
            allowWebWorkers: false
        }, false);
        uploadInstance.on('start', function () {
            console.log('Starting');
        });

        uploadInstance.on('end', function (error, fileObj) {
            console.log('On end File Object: ', fileObj);
        });

        uploadInstance.on('uploaded', function (error, fileObj) {
            console.log('uploaded: ', fileObj);
        })
        return e && e.fileList;
    }
    upload(e) {
        console.log(e)
        const file = e.currentTarget.files[0];
        console.log(e.currentTarget.files[0])

        let uploadInstance = ImageFiles.insert({
            file: file,
            streams: 'dynamic',
            chunkSize: 'dynamic',
            allowWebWorkers: false
        }, false);
        uploadInstance.on('start', function () {
            console.log('Starting');
        });

        uploadInstance.on('end', function (error, fileObj) {
            console.log('On end File Object: ', fileObj);
        });

        uploadInstance.on('uploaded', function (error, fileObj) {
            console.log('uploaded: ', fileObj);
        })
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
        const imageUrl = null;
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
                        //normalize: this.normfile,
                    })(
                        <Upload name="logo" listType="picture" onChange={this.upload}>
                            <Button type="ghost"> <Icon type="upload" /> Click to upload </Button>
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
                <input type="file" onChange={this.upload} />
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