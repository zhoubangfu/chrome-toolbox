import React, { useRef } from 'react'
import qrcode from 'qrcode'
import { Form, Input, Button, message } from 'antd'

import styles from './style.module.scss'

// 生产环境存在变量
declare let chrome: any

const QRcodeTools = () => {
  const [form] = Form.useForm()

  const qrcodeCanvasRef: any = useRef()

  const generate = () => {
    form.validateFields(['text']).then(({ text }) => {
      if (text.length > 140) {
        message.info('内容长度较长，右击另存二维码吧！')
      }
      qrcode.toCanvas(qrcodeCanvasRef.current, text, function (error) {
        message.destroy()

        if (error) {
          message.error('出错啦！')
          console.error(error)
        } else {
          message.success('已完成！')
        }
      })
    })
  }

  const getPageUrl = () => {
    chrome.tabs.getSelected(null, (tab: any) => {
      form.setFieldsValue({ text: tab.url })
    })
  }

  return (
    <div className={styles['qrcode']}>
      <Form form={form}>
        <Form.Item
          label="内容"
          name="text"
          rules={[{ required: true, message: '请输入二维码内容!' }]}
        >
          <Input allowClear={true} onPressEnter={generate} autoComplete={'off'} />
        </Form.Item>
        <Form.Item>
          <Button className={styles['button-frant']} onClick={generate} type="primary">
            生成
          </Button>
          <Button onClick={getPageUrl}>获取网址</Button>
        </Form.Item>
      </Form>
      <div className={styles['qrcode-container']}>
        <canvas ref={qrcodeCanvasRef}></canvas>
      </div>
    </div>
  )
}

export default QRcodeTools
