import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Switch, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class Edit extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (err) return;
            Meteor.call('logoCategories.create', values, (err, res) => {
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

        return (
            <Form onSubmit={this.handleSubmit}>
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
                    {getFieldDecorator('active', { valuePropName: 'checked' })(
                        <Switch checkedChildren='On' unCheckedChildren='Off' />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">Edit</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(Edit);