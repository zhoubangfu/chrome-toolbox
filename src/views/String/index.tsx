import React, { useState, useRef } from 'react'

import { Button, Descriptions, message } from 'antd'
import { jsCopy } from '@/utils'

import styles from './style.module.scss'

message.config({
  maxCount: 1
})

// 匹配单个数字
const numReg = /\d/g
// 匹配数值
const numValReg = /\d+/g
// 匹配英文字符
const charReg = /[a-zA-Z]/g
// 匹配英文单词
const strReg = /[a-zA-Z]+/g
// 中文字符
const chineseCharReg = /[\u4e00-\u9fa5]/g
//

const StrTools = () => {
  // 输入内容
  const [inputText, setInputText] = useState('')

  // 输入框
  const textAreaRef: React.RefObject<any> = useRef()

  // const copyText = (target: HTMLInputElement | HTMLTextAreaElement) => {
  //   target.select()
  //   document.execCommand('copy')
  // }

  // 大小写转换
  const actionHandlers = async (
    type: 'upper' | 'lower' | 'underline' | 'hump' | 'copy' = 'lower'
  ) => {
    let value = inputText

    switch (type) {
      case 'upper': {
        value = inputText.toLocaleUpperCase()
        break
      }
      case 'hump': {
        // 分割为数组
        const textArr = inputText.split('_')
        // 转换结果
        value = textArr[0]
        textArr.forEach((item, index) => {
          // 第一组不转换
          if (index !== 0) {
            // 第一个字母大写，后面保持不变
            value += item.charAt(0).toLocaleUpperCase() + item.substr(1, item.length)
          }
        })

        break
      }
      case 'underline': {
        value = inputText.replace(/([A-Z])/g, '_$1').toLowerCase()
        break
      }
      case 'lower': {
        value = inputText.toLocaleLowerCase()
        break
      }
      default: {
        jsCopy(value)

        message.success('已复制！')
        return
      }
    }

    // 赋值
    await setInputText(value)

    // 复制
    // copyText(textAreaRef.current)
    jsCopy(value)
  }

  return (
    <div className={styles.main}>
      <div className={styles['input-area']}>
        <textarea
          ref={textAreaRef}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.actions}>
        <Button onClick={() => actionHandlers('lower')}>大写转小写</Button>
        <Button onClick={() => actionHandlers('upper')}>小写转大写</Button>
        <Button onClick={() => actionHandlers('hump')}>下划换驼峰</Button>
        <Button onClick={() => actionHandlers('underline')}>驼峰转下划</Button>
        <Button onClick={() => actionHandlers('copy')}>复制</Button>
      </div>
      <Descriptions title="字符统计结果" bordered column={3}>
        <Descriptions.Item label="中文单字">34</Descriptions.Item>
        <Descriptions.Item label="中文单词">34</Descriptions.Item>
        <Descriptions.Item label="英文单字">324</Descriptions.Item>
        <Descriptions.Item label="英文单词">84</Descriptions.Item>
        <Descriptions.Item label="数字单字">23</Descriptions.Item>
        <Descriptions.Item label="数字单词">12</Descriptions.Item>
        <Descriptions.Item label="特殊字符">12</Descriptions.Item>
        <Descriptions.Item label="中文标点">12</Descriptions.Item>
        <Descriptions.Item label="英文标点">12</Descriptions.Item>
        <Descriptions.Item label="全部字符">12</Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default StrTools
