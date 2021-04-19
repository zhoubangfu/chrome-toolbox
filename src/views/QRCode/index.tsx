import React, { useRef } from 'react'
import qrcode from 'qrcode'
import { Form, Input, Button, message } from 'antd'

import styles from './style.module.scss'

// 生产环境存在变量
declare let chrome: any

const QRcodeTools = (): React.ReactElement => {
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
        }
      })
    })
  }

  const getPageUrl = () => {
    chrome.tabs.getSelected(null, (tab: any) => {
      form.setFieldsValue({ text: tab.url })
    })
  }

  const saveFile = () => {
    const MIME_TYPE = 'image/png'

    const imgURL = qrcodeCanvasRef.current.toDataURL(MIME_TYPE)

    const dlLink = document.createElement('a')
    dlLink.download = 'qr'
    dlLink.href = imgURL
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':')
    document.body.appendChild(dlLink)
    dlLink.click()
    document.body.removeChild(dlLink)
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
          <Button className={styles['button-frant']} onClick={getPageUrl}>
            获取网址
          </Button>
          <Button onClick={saveFile}>保存</Button>
        </Form.Item>
      </Form>
      <div className={styles['qrcode-container']}>
        <canvas ref={qrcodeCanvasRef}></canvas>
      </div>
    </div>
  )
}

export default QRcodeTools
