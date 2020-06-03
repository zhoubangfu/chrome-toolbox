import React from 'react'
import ReactDOM from 'react-dom'

import { Tabs } from 'antd'

import StrTools from './views/StrTools'
import RandomTools from './views/RandomTools'

import './styles/global.scss'

ReactDOM.render(
  <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="字符工具" key="1">
      <StrTools />
    </Tabs.TabPane>
    <Tabs.TabPane tab="随机值" key="2">
      <RandomTools />
    </Tabs.TabPane>
  </Tabs>,
  document.getElementById('popup')
)
