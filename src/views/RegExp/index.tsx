import React, { useState } from 'react'

import { Form, Input, Button } from 'antd'

const RegExpTools = () => {
  // 待匹配文本
  const [text, setText] = useState<string>('')
  // 正则文本
  const [regexp, setRegexp] = useState<string>('')
  // 替换文本
  const [replaceText, setReplaceText] = useState<string>('')
  const handleTest = (): void => {
    console.log(text)
  }

  const handleReplace = (): void => {
    console.log(replaceText)
  }

  return (
    <div className="main">
      <Form>
        <Form.Item>
          <Input.TextArea
            placeholder="待匹配的文本"
            rows={3}
            value={text}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
            }
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="regexp"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: '70%' }}
          >
            <Input
              value={regexp}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setRegexp(e.target.value)
              }
              placeholder="正则表达式"
            />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', margin: '0 8px' }}>
            <Button onClick={handleTest}>匹配</Button>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Input.TextArea placeholder="匹配结果" disabled rows={3} />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="replaceText"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: '70%' }}
          >
            <Input
              value={replaceText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setReplaceText(e.target.value)
              }
              placeholder="替换文本"
            />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', margin: '0 8px' }}>
            <Button onClick={handleReplace}>替换</Button>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Input.TextArea placeholder="替换结果" disabled rows={3} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default RegExpTools
