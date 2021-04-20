import React, { useState } from 'react'
import { Button, Form, Input, Radio, message } from 'antd'
const JsInsert = (): React.ReactElement => {
  // 代码类型
  const [codeType, setCodeType] = useState<string>('js')
  // 插入方式
  const [codeSource, setCodeSource] = useState<string>('text')
  // 源代码
  const [code, setCode] = useState<string>('')
  // 源码地址
  const [url, setUrl] = useState<string>('')

  const sendTask = (values: any) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0]?.id as number, values, (response) => {
        if (response) {
          message.success('插入成功！')
        } else {
          message.error('插入失败！')
        }
        console.log(response)
      })
    })
  }

  return (
    <div className="main">
      <Form
        initialValues={{
          codeType,
          codeSource
        }}
        onFinish={sendTask}
      >
        <Form.Item label="代码类型" name="codeType">
          <Radio.Group value={codeType} onChange={(e) => setCodeType(e.target.value)}>
            <Radio value="js">js</Radio>
            {/* <Radio value="html">html</Radio> */}
            <Radio value="css">css</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="代码来源" name="codeSource">
          <Radio.Group value={codeSource} onChange={(e) => setCodeSource(e.target.value)}>
            <Radio value="url">url引用</Radio>
            <Radio value="text">代码文本</Radio>
          </Radio.Group>
        </Form.Item>
        {codeSource === 'text' ? (
          <Form.Item
            label="编辑代码"
            name="code"
            rules={[{ required: true, message: '请输入代码!' }]}
          >
            <Input.TextArea
              rows={4}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </Form.Item>
        ) : (
          <Form.Item
            name="url"
            label="代码地址"
            rules={[{ required: true, message: '请代码地址!' }]}
          >
            <Input
              value={url}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUrl(e.target.value)
              }
              placeholder="https://..."
            />
          </Form.Item>
        )}
        <Form.Item>
          <Button className="button-frant" htmlType="submit">
            插入
          </Button>
          {codeType === 'html' && <Button>获取父节点</Button>}
        </Form.Item>
      </Form>
    </div>
  )
}

export default JsInsert
