/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react'

import { Button, Descriptions as Desc, message } from 'antd'
import { jsCopy } from '@/utils'

import styles from './style.module.scss'

message.config({
  maxCount: 1
})

export interface ResultInterface {
  zhChar: number
  zhStr: number
  enChar: number
  enStr: number
  numChar: number
  numStr: number
  special: number
  zhPunctuation: number
  enPunctuation: number
  total: number
}

// 匹配单个数字
const numCharReg = /\d/g
// 匹配数值
const numStrReg = /\d+/g
// 匹配英文字符
const enCharReg = /[a-zA-Z]/g
// 匹配英文单词
const enStrReg = /[a-zA-Z]+/g
// 中文字符
const zhCharReg = /[\u4e00-\u9fa5]/g
// 中文单词
const zhStrReg = /[\u4e00-\u9fa5]+/g
// 特殊字符
const specialReg = /((?=[\x21-\x7e]+)[^A-Za-z0-9])/g
// 中文标点
const zhPunctuationReg = /[\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b]/g
// 英文标点
/* eslint-disable no-useless-escape */
const enPunctuationReg = /[`~!@#$%^&*()_+\-=\[\]{}\\|;:''"",.\/<>?]/g

const regResult = (targetStr: string, reg: RegExp): number => {
  const regResultArr = targetStr.match(reg)

  return regResultArr === null ? 0 : regResultArr?.length
}

const StrTools = () => {
  // 输入内容
  const [inputText, setInputText] = useState('')
  // 统计结果
  const [result, setResult] = useState<ResultInterface>({
    zhChar: 0,
    zhStr: 0,
    enChar: 0,
    enStr: 0,
    numChar: 0,
    numStr: 0,
    special: 0,
    zhPunctuation: 0,
    enPunctuation: 0,
    total: 0
  })

  useEffect(() => {
    setResult({
      zhChar: regResult(inputText, zhCharReg),
      zhStr: regResult(inputText, zhStrReg),
      enChar: regResult(inputText, enCharReg),
      enStr: regResult(inputText, enStrReg),
      numChar: regResult(inputText, numCharReg),
      numStr: regResult(inputText, numStrReg),
      special: regResult(inputText, specialReg),
      zhPunctuation: regResult(inputText, zhPunctuationReg),
      enPunctuation: regResult(inputText, enPunctuationReg),
      total: inputText.length
    })
  }, [inputText])

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
      <Desc title="字符统计结果" bordered column={3}>
        <Desc.Item label="中文单字">{result.zhChar}</Desc.Item>
        <Desc.Item label="中文单词">{result.zhStr}</Desc.Item>
        <Desc.Item label="英文单字">{result.enChar}</Desc.Item>
        <Desc.Item label="英文单词">{result.enStr}</Desc.Item>
        <Desc.Item label="数字单字">{result.numChar}</Desc.Item>
        <Desc.Item label="数字单词">{result.numStr}</Desc.Item>
        <Desc.Item label="特殊字符">{result.special}</Desc.Item>
        <Desc.Item label="中文标点">{result.zhPunctuation}</Desc.Item>
        <Desc.Item label="英文标点">{result.enPunctuation}</Desc.Item>
        <Desc.Item label="全部字符">{result.total}</Desc.Item>
      </Desc>
    </div>
  )
}

export default StrTools
