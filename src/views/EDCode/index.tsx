import React from 'react'
import { Tabs } from 'antd'

import Base64 from './Base64'
import Encode from './Encode'
import Encrypt from './Encrypt'
import Hash from './Hash'

import styles from './style.module.scss'

const EncryptTools = () => {
  return (
    <div className="main">
      <Tabs defaultActiveKey="1" tabPosition="bottom">
        <Tabs.TabPane tab="加解密" key="1">
          <div className={styles.content}>
            <Encrypt />
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="散列/哈希" key="2">
          <div className={styles.content}>
            <Hash />
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="base64" key="3">
          <div className={styles.content}>
            <Base64 />
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="url转码" key="4">
          <div className={styles.content}>
            <Encode />
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default EncryptTools
