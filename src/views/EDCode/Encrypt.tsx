import React from 'react'
import { DecryptedMessage, AES, TripleDES, RC4, Rabbit, enc } from 'crypto-js'

import { Form, Input, Button, Radio, message } from 'antd'

import './antd.override.scss'

type algorithmType = 'AES' | 'Tripledes' | 'RC4' | 'Rabbit'

const handleDo = (
  text: string,
  algorithmName: algorithmType,
  actionType: 'encrypt' | 'decrypt'
): string => {
  let result: DecryptedMessage
  const secretPassphrase = '9+M=p5;J#*M=q+@B'

  switch (algorithmName) {
    case 'AES': {
      result = AES[actionType](text, secretPassphrase)
      break
    }
    case 'Tripledes': {
      result = TripleDES[actionType](text, secretPassphrase)
      break
    }
    case 'RC4': {
      result = RC4[actionType](text, secretPassphrase)
      break
    }
    case 'Rabbit': {
      result = Rabbit[actionType](text, secretPassphrase)
    }
  }

  if (actionType === 'decrypt') {
    return result.toString(enc.Utf8)
  } else {
    return result.toString()
  }
}

const Encrypt = () => {
  const [form] = Form.useForm()

  const encrypt = () => {
    form
      .validateFields(['plaintext', 'algorithmName'])
      .then((fields) => {
        // 加密
        form.setFields([
          {
            name: 'ciphertext',
            value: handleDo(fields.plaintext, fields.algorithmName, 'encrypt')
          }
        ])
      })
      .then(() => {
        message.destroy()
        message.success('已完成！')
      })
  }

  const decrypt = () => {
    form
      .validateFields(['ciphertext', 'algorithmName'])
      .then((fields) => {
        // 解密
        form.setFields([
          {
            name: 'plaintext',
            value: handleDo(fields.ciphertext, fields.algorithmName, 'decrypt')
          }
        ])
      })
      .then(() => {
        message.destroy()
        message.success('已完成！')
      })
  }

  return (
    <div className="encrypt">
      <Form
        form={form}
        initialValues={{
          algorithmName: 'AES'
        }}
      >
        <Form.Item
          label="明文"
          name="plaintext"
          rules={[{ required: true, message: '请输入加密明文!' }]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item label={<span className="no-rule-form-label">算法</span>}>
          <Form.Item
            className="form-innner-item"
            name="algorithmName"
            rules={[{ required: true, message: '请至少选择一种字符类型!' }]}
          >
            <Radio.Group name="algorithmName">
              <Radio value="AES">AES</Radio>
              <Radio value="Tripledes">Tripledes</Radio>
              <Radio value="RC4">RC4</Radio>
              <Radio value="Rabbit">Rabbit</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item className="form-innner-item">
            <Button onClick={encrypt}>加密</Button>
          </Form.Item>
          <Form.Item className="form-innner-item">
            <Button onClick={decrypt}>解密</Button>
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
