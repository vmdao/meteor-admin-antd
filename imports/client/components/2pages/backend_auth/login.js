import React, { PropTypes } from 'react'
import { Button, Row, Form, Input } from 'antd'
import { config } from '../../../utils'
const FormItem = Form.Item

const login = ({
  loginButtonLoading,
  onOk,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll
  }
}) => {
  function handleOk() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
       FlowRouter.go('/');
    })
  }
  return (
    <div id="pageLogin" className='form'>
      <div className='logo'>
        <img src={config.logoSrc} />
        <span>{config.name}</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Username'
              }
            ]
          })(<Input size='large' onPressEnter={handleOk} placeholder='Username' />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Password'
              }
            ]
          })(<Input size='large' type='password' onPressEnter={handleOk} placeholder='Password' />)}
        </FormItem>
        <Row>
          <Button type='primary' size='large' onClick={handleOk} loading={loginButtonLoading}>
            Login
          </Button>
        </Row>
        <p>
          <span>User：guest</span>
          <span>Pass：guest</span>
        </p>
      </form>
    </div>
  )
}

login.propTypes = {
  form: PropTypes.object,
  loginButtonLoading: PropTypes.bool,
  onOk: PropTypes.func
}

export default Form.create()(login)
