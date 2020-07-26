import React from 'react'
import ReactDOM from 'react-dom'

import { Tabs } from 'antd'

import StrTools from './views/String'
import RandomTools from './views/Random'
import RegExpTools from './views/RegExp'
import QRCodeTools from './views/QRCode'
import EDCodeTools from './views/EDCode'
import CacheTools from './views/Cache'

import './styles/global.scss'

ReactDOM.render(
  <>
    <Tabs defaultActiveKey="5">
      <Tabs.TabPane tab="字符转换" key="1">
        <StrTools />
      </Tabs.TabPane>
      <Tabs.TabPane tab="随机值" key="2">
        <RandomTools />
      </Tabs.TabPane>
      <Tabs.TabPane tab="正则测试" key="3">
        <RegExpTools />
      </Tabs.TabPane>
      <Tabs.TabPane tab="加解密" key="4">
        <EDCodeTools />
      </Tabs.TabPane>
      <Tabs.TabPane tab="二维码" key="5">
        <QRCodeTools />
      </Tabs.TabPane>
      <Tabs.TabPane tab="清缓存" key="6">
        <CacheTools />
      </Tabs.TabPane>
    </Tabs>
    <footer className="footer">
      源码地址：
      <a href="https://github.com/varddd/chrome-toolbox" target="__blank">
        https://github.com/varddd/chrome-toolbox
      </a>
    </footer>
  </>,
  document.getElementById('popup')
)
