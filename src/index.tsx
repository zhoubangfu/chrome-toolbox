import React from 'react'
import ReactDOM from 'react-dom'

import { Tabs } from 'antd'

import StrTools from './views/StrTools'
import RandomTools from './views/RandomTools'
import QRCodeTools from './views/QRCodeTools'
import EDCodeTools from './views/EDCodeTools'

import './styles/global.scss'

ReactDOM.render(
  <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="字符转换" key="1">
      <StrTools />
    </Tabs.TabPane>
    <Tabs.TabPane tab="随机值" key="2">
      <RandomTools />
    </Tabs.TabPane>
    <Tabs.TabPane tab="二维码" key="3">
      <QRCodeTools />
    </Tabs.TabPane>
    <Tabs.TabPane tab="加解密" key="4">
      <EDCodeTools />
    </Tabs.TabPane>
  </Tabs>,
  document.getElementById('popup')
)
