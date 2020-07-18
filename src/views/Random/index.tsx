import React, { useState } from 'react'
import { Form, Slider, Checkbox, Button, List, message } from 'antd'

import { jsCopy } from '@/utils'

const options = ['大写字母', '小写字母', '数字', '英文符号']
const charPool = [
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'abcdefghijklmnopqrstuvwxyz',
  '0123456789',
  '`~!@#$%^&*_-+=:;,.?'
]

const RandomTools = () => {
  // 随机类型
  const [randomTypes, setRandomTypes] = useState<Array<string>>(['小写字母', '数字'])
  // 字符长度
  const [randomLength, setRandomLength] = useState(16)
  // 生成字符
  const [targetArr, setTargetArr] = useState<Array<string>>([])

  // 切换类型时保存
  const randomTypeChanged = (types: any): void => {
    setRandomTypes(types)
  }

  // 生成字符
  const handleGenerateTarget = ({
    randomLength = 16,
    randomTypes = ['小写字母', '数字']
  }): void => {
    // 备选字符
    const poolTarget = randomTypes.reduce((all = '', curr: string, index: number) => {
      if (index === 1) {
        all = charPool[options.indexOf(all)]
      }
      return all + charPool[options.indexOf(curr)]
    })

    // 生成结果
    const randomArr = []

    for (let i = 0; i < 5; i++) {
      let randomStr = ''
      for (let j = 0; j < randomLength; j++) {
        randomStr += poolTarget[Math.floor(Math.random() * poolTarget.length)]
      }

      randomArr.push(randomStr)
    }

    setTargetArr(randomArr)
  }

  const handleCopy = (text: string): void => {
    jsCopy(text)
    message.destroy()
    message.success('已复制！ ')
  }

  return (
    <div className="main">
      <Form
        onFinish={handleGenerateTarget}
        initialValues={{
          randomTypes,
          randomLength
        }}
      >
        <Form.Item label="生成字符长度" name="randomLength" rules={[{ required: true }]}>
          <Slider
            value={randomLength}
            onChange={(val: any) => setRandomLength(val)}
            min={1}
            max={100}
          />
        </Form.Item>
        <Form.Item
          label="包含字符类型"
          name="randomTypes"
          rules={[{ required: true, message: '请至少选择一种字符类型!' }]}
        >
          <Checkbox.Group
            options={options}
            value={randomTypes}
            onChange={randomTypeChanged}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">生成</Button>
        </Form.Item>
      </Form>
      <div>
        <List
          dataSource={targetArr}
          bordered
          renderItem={(item) => (
            <List.Item
              style={{ padding: '4px 0 4px 12px' }}
              actions={[
                <Button type="link" onClick={() => handleCopy(item)}>
                  复制
                </Button>
              ]}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default RandomTools
