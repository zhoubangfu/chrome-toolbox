import React from 'react'
import CryptoJs from 'crypto-js'

import { Form, Input, Button, message } from 'antd'

import './antd.override.scss'

const Hash = (): React.ReactElement => {
  const [form] = Form.useForm()

  const encode = (algorithm: 'MD5' | 'SHA1' | 'SHA256' | 'SHA224' | 'SHA512') => {
    form
      .validateFields(['plaintext'])
      .then((fields) => {
        // 加密
        form.setFields([
          {
            name: 'ciphertext',
            value: CryptoJs[algorithm](fields.plaintext)
          }
        ])
      })
      .then(() => {
        message.destroy()
        message.success('已完成！')
      })
  }

  return (
    <div className="hash">
      <Form form={form}>
        <Form.Item
          label="明文"
          name="plaintext"
          rules={[{ required: true, message: '请输入加密明文!' }]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item label={<span className="no-rule-form-label">算法</span>}>
          <Form.Item className="form-innner-item">
            <Button onClick={() => encode('MD5')}>md5</Button>
          </Form.Item>
          <Form.Item className="form-innner-item">
            <Button onClick={() => encode('SHA1')}>sha1</Button>
          </Form.Item>
          <Form.Item className="form-innner-item">
            <Button onClick={() => encode('SHA224')}>sha224</Button>
          </Form.Item>
          <Form.Item className="form-innner-item">
            <Button onClick={() => encode('SHA256')}>sha256</Button>
          </Form.Item>
          <Form.Item className="form-innner-item">
            <Button onClick={() => encode('SHA512')}>sha512</Button>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label={<span className="no-rule-form-label">密文</span>}
          name="ciphertext"
        >
          <Input.TextArea disabled rows={5} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Hash
