import React from 'react'

import { Form, Input, Button, message } from 'antd'

import './antd.override.scss'

const Base64Module = () => {
  const [form] = Form.useForm()

  const encode = () => {
    form
      .validateFields(['plaintext'])
      .then((fields) => {
        // 加密
        form.setFields([
          {
            name: 'ciphertext',
            value: ''
          }
        ])
      })
      .then(() => {
        message.destroy()
        message.success('已完成！')
      })
  }

  const decode = () => {
    form
      .validateFields(['ciphertext'])
      .then((fields) => {
        // 加密
        form.setFields([
          {
            name: 'plaintext',
            value:
              fields.algorithmName === 'codeURI'
                ? decodeURI(fields.ciphertext)
                : decodeURIComponent(fields.ciphertext)
          }
        ])
      })
      .then(() => {
        message.destroy()
        message.success('已完成！')
      })
  }

  return (
    <div className="encode">
      <Form
        form={form}
        initialValues={{
          algorithmName: 'codeURI'
        }}
      >
        <Form.Item
          label="明文"
          name="plaintext"
          rules={[{ required: true, message: '请输入加密明文!' }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item label={<span className="no-rule-form-label">动作</span>}>
          <Form.Item className="form-innner-item">
            <Button onClick={encode}>转码</Button>
          </Form.Item>
          <Form.Item className="form-innner-item">
            <Button onClick={decode}>解码</Button>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="密文"
          name="ciphertext"
          rules={[{ required: true, message: '请输入解密密文!' }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Base64Module
