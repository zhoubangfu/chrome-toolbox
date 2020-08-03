import React, { useState } from 'react'
import {
  Form,
  Checkbox,
  Button,
  message,
  Radio,
  Popconfirm,
  Spin,
  Row,
  Col,
  Alert
} from 'antd'
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
    <div className="cache">
      <Spin tip="清理中，请销后..." spinning={spinning}>
        <Alert message="数据清理操作不可逆，请谨慎使用！" type="warning" />
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
              <Row>
                <Col span={6}>
                  <Checkbox value="history">浏览记录</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="cache">浏览器缓存</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="cookies">Cookie</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="downloads">下载历史</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="formData">表单数据</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="appcache">应用程序缓存</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="fileSystems">文件系统数据</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="localStorage">本地存储</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="indexedDB">indexedDB</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="serverBoundCertificates">证书</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="pluginData">插件数据</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="passwords">密码</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value="webSQL">WebSQL</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            label="时间范围"
            name="range"
            rules={[{ required: true, message: '请输入二维码内容!' }]}
          >
            <Radio.Group>
              <Row>
                <Col span={6}>
                  <Radio className={styles['rang-radio']} value="m10">
                    10分钟
                  </Radio>
                </Col>
                <Col span={6}>
                  <Radio className={styles['rang-radio']} value="m15">
                    15分钟
                  </Radio>
                </Col>
                <Col span={6}>
                  <Radio className={styles['rang-radio']} value="m30">
                    30分钟
                  </Radio>
                </Col>
                <Col span={6}>
                  <Radio className={styles['rang-radio']} value="h1">
                    1小时
                  </Radio>
                </Col>
                <Col span={6}>
                  <Radio className={styles['rang-radio']} value="h2">
                    2小时
                  </Radio>
                </Col>
                <Col span={6}>
                  <Radio className={styles['rang-radio']} value="h5">
                    5小时
                  </Radio>
                </Col>
                <Col span={6}>
                  <Radio className={styles['rang-radio']} value="d1">
                    1天
                  </Radio>
                </Col>
                <Col span={6}>
                  <Radio className={styles['rang-radio']} value="w1">
                    一周
                  </Radio>
                </Col>
                <Col span={6}>
                  <Radio className={styles['rang-radio']} value="M1">
                    一月
                  </Radio>
                </Col>
                <Col span={6}>
                  <Radio className={styles['rang-radio']} value="all">
                    全部
                  </Radio>
                </Col>
              </Row>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Popconfirm
              title="确认清理吗？？？"
              okText="确认"
              cancelText="取消"
              onConfirm={handelClean}
            >
              <Button type="primary" danger style={{ width: '100%' }}>
                清理
              </Button>
            </Popconfirm>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  )
}

export default CacheTools
