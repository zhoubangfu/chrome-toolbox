import React, { useState } from 'react'
import { Form, Checkbox, Button, message, Radio, Popconfirm, Spin } from 'antd'
import { handleDo } from './handle'
import styles from './style.module.scss'

// doc: https://crxdoc-zh.appspot.com/extensions/browsingData

const CacheTools = () => {
  const [form] = Form.useForm()

  const [spinning, setSpinning] = useState(false)

  const handelClean = () => {
    form
      .validateFields(['types', 'range'])
      .then((fields: { types: Array<string>; range: string } | any) => {
        setSpinning(true)

        handleDo(fields.types, fields.range, () => {
          setSpinning(false)
          message.info('操作已完成！')
        })
      })
  }

  return (
    <div className={styles['cache']}>
      <Spin tip="清理中，请销后..." spinning={spinning}>
        <Form
          form={form}
          initialValues={{
            types: ['history', 'cache', 'cookies', 'downloads'],
            range: 'h1'
          }}
        >
          <Form.Item
            label="清理类型"
            name="types"
            rules={[{ required: true, message: '请至少选择一种类型!' }]}
          >
            <Checkbox.Group>
              <Checkbox value="history" style={{ marginLeft: 8 }}>
                浏览记录
              </Checkbox>
              <Checkbox value="cache">浏览器缓存</Checkbox>
              <Checkbox value="cookies">Cookie</Checkbox>
              <Checkbox value="downloads">下载历史</Checkbox>
              <Checkbox value="formData">表单数据</Checkbox>
              <Checkbox value="appcache">应用程序缓存</Checkbox>
              <Checkbox value="fileSystems">文件系统数据</Checkbox>
              <Checkbox value="localStorage">本地存储</Checkbox>
              <Checkbox value="indexedDB">indexedDB</Checkbox>
              <Checkbox value="serverBoundCertificates">证书</Checkbox>
              <Checkbox value="pluginData">插件数据</Checkbox>
              <Checkbox value="passwords">密码</Checkbox>
              <Checkbox value="webSQL">WebSQL</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            label="时间范围"
            name="range"
            rules={[{ required: true, message: '请输入二维码内容!' }]}
          >
            <Radio.Group>
              <Radio className={styles['rang-radio']} value="m10">
                10分钟
              </Radio>
              <Radio className={styles['rang-radio']} value="m15">
                15分钟
              </Radio>
              <Radio className={styles['rang-radio']} value="m30">
                30分钟
              </Radio>
              <Radio className={styles['rang-radio']} value="h1">
                1小时
              </Radio>
              <Radio className={styles['rang-radio']} value="h2">
                2小时
              </Radio>
              <Radio className={styles['rang-radio']} value="h5">
                5小时
              </Radio>
              <Radio className={styles['rang-radio']} value="d1">
                1天
              </Radio>
              <Radio className={styles['rang-radio']} value="w1">
                一周
              </Radio>
              <Radio className={styles['rang-radio']} value="M1">
                一月
              </Radio>
              <Radio className={styles['rang-radio']} value="all">
                全部
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
            <Popconfirm
              title="确认清理吗？？？"
              okText="确认"
              cancelText="取消"
              onConfirm={handelClean}
            >
              <Button type="primary">清理</Button>
            </Popconfirm>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  )
}

export default CacheTools
