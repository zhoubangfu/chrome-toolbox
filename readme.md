## 简介

chrome-toolbox 是谷歌浏览器`快捷工具`插件，使用 react 开发，意在提供一个快捷方便且可自定义的工具箱，目前实现【字符替换、统计】、【随机值】、【正则测试】功能。

开发环境使用[react-env](https://github.com/varddd/react-env)修改。

## 项目开发环境说明

项目使用 react 开发，使用 cra 创建开发环境，需要有以下入门知识：

- react react 及 hooks 基础
- typescript 基础
- sass css 扩展
- antd react ui 库，本项目使用，[文档](https://ant.design/components/overview-cn/)

需要自定义清空或完善新标签页面扩展功能下需要了解[插件开发基础](https://crxdoc-zh.appspot.com/extensions/getstarted)。

### 开发项目

启动开发环境项目

```shell
yarn start
```

> 新标签页及 popup 页均可看着常规 pc 页面

### 构建项目

```shell
yarn build
```

## 使用

1. 运行命令，构建项目
2. 打开**谷歌浏览器**->**更多工具**->**扩展程序**，打开**开发者模式**->**加载已解压的扩展程序**，选择 build 目录即可
3. 浏览器新建标签页即可看到效果，选择右上角扩展图标，可使用 popup 页面工具
