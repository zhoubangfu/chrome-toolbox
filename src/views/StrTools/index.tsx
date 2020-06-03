import React, { useState, useRef } from 'react'

import { Button } from 'antd'
import { jsCopy } from '@/utils'

import styles from './style.module.scss'

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
    type: 'upper' | 'lower' | 'underline' | 'hump' = 'lower'
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
      default: {
        value = inputText.toLocaleLowerCase()
        break
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
        <Button onClick={() => actionHandlers('lower')}>字符统计</Button>
      </div>
      <div>统计结果</div>
    </div>
  )
}

export default StrTools
