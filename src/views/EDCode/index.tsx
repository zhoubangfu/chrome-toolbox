import React from 'react'
import { Tabs } from 'antd'

import Encode from './Encode'
import Hash from './Hash'

import styles from './style.module.scss'

const EncryptTools = (): React.ReactElement => {
  return (
    <div className="main">
      <Tabs defaultActiveKey="1" tabPosition="bottom">
        <Tabs.TabPane tab="散列/哈希" key="2">
          <div className={styles.content}>
            <Hash />
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
