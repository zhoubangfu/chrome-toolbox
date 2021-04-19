import React, { useState } from 'react'

import { Form, Input, Button, Checkbox } from 'antd'

const CheckboxGroup = Checkbox.Group

const RegExpTools = (): React.ReactElement => {
  // 待匹配文本
  const [text, setText] = useState<string>('')
  // 正则文本
  const [regexp, setRegexp] = useState<string>('')
  // 替换文本
  const [replaceText, setReplaceText] = useState<string>('')
  // 正则状态
  const [regexpType, setRegexpType] = useState<Array<any>>([])

  // 匹配结果
  const [matchResult, setMatchResult] = useState<string>('')
  // 替换结果
  const [replaceResult, setReplaceResult] = useState<string>('')

  const handleTest = (): void => {
    const generateReg = new RegExp(regexp, regexpType.join(''))
    let matchArr: Array<any> | null = []

    if (text && regexp) {
      matchArr = text.match(generateReg)
    }

    const result = `${generateReg} 共${matchArr?.length}个结果：\n${matchArr?.join('\n')}`
    setMatchResult(result)
  }

  const handleReplace = (): void => {
    const generateReg = new RegExp(regexp, regexpType.join(''))
    setReplaceResult(text.replace(generateReg, replaceText))
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
          <Form.Item name="regexp" style={{ display: 'inline-block', width: '50%' }}>
            <Input
              value={regexp}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setRegexp(e.target.value)
              }
              placeholder="正则表达式."
            />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', margin: '0 8px' }}>
            <CheckboxGroup
              options={[
                { label: '全局', value: 'g' },
                { label: '大小写', value: 'i' }
              ]}
              value={regexpType}
              onChange={setRegexpType}
            />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', margin: '0 8px' }}>
            <Button onClick={handleTest}>匹配</Button>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Input.TextArea placeholder="匹配结果" disabled rows={3} value={matchResult} />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item name="replaceText" style={{ display: 'inline-block', width: '70%' }}>
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
          <Input.TextArea placeholder="替换结果" rows={3} value={replaceResult} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default RegExpTools
