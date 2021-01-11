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
    <Tabs defaultActiveKey="str-tool">
      <Tabs.TabPane tab="字符转换" key="str-tool">
        <StrTools />
      </Tabs.TabPane>
      <Tabs.TabPane tab="清理缓存" key="cache-tool">
        <CacheTools />
      </Tabs.TabPane>
      <Tabs.TabPane tab="随机字符" key="random-tool">
        <RandomTools />
      </Tabs.TabPane>
      <Tabs.TabPane tab="正则测试" key="reg-exp-tool">
        <RegExpTools />
      </Tabs.TabPane>
      <Tabs.TabPane tab="加解密" key="edcode-tool">
        <EDCodeTools />
      </Tabs.TabPane>
      <Tabs.TabPane tab="二维码" key="qrcode-tool">
        <QRCodeTools />
      </Tabs.TabPane>
    </Tabs>
    <footer className="footer">
      源码地址：
      <a href="https://github.com/zhoubangfu/chrome-toolbox" target="__blank">
        https://github.com/zhoubangfu/chrome-toolbox
      </a>
    </footer>
  </>,
  document.getElementById('popup')
)
