import React from 'react'

import { Form, Input, Button, Radio, message, Tooltip } from 'antd'

import './antd.override.scss'

const Encrypt = () => {
  const [form] = Form.useForm()

  const encode = () => {
    form
      .validateFields(['plaintext', 'algorithmName'])
      .then((fields) => {
        // 加密
        form.setFields([
          {
            name: 'ciphertext',
            value:
              fields.algorithmName === 'codeURI'
                ? encodeURI(fields.plaintext)
                : encodeURIComponent(fields.plaintext)
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
      .validateFields(['ciphertext', 'algorithmName'])
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
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item label={<span style={{ marginLeft: '10px' }}>算法</span>}>
          <Form.Item
            style={{ display: 'inline-block', margin: '0 8px' }}
            name="algorithmName"
            rules={[{ required: true, message: '请至少选择一种字符类型!' }]}
          >
            <Radio.Group name="algorithmName">
              <Radio value="codeURI">en(de)codeURI</Radio>
              <Radio value="codeURIComponent">
                <Tooltip title="en(de)codeURLComponent">
                  <span>en(de)**Component</span>
                </Tooltip>
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', margin: '0 8px' }}>
            <Button onClick={encode}>转码</Button>
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', margin: '0 8px' }}>
            <Button onClick={decode}>解码</Button>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="密文"
          name="ciphertext"
          rules={[{ required: true, message: '请输入解密密文!' }]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Encrypt
