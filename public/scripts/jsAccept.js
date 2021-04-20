chrome.extension.onMessage.addListener((body, sender, callback) => {
  const { codeType, codeSource, code, url } = body

  let ele = null

  const linkKey = {
    js: 'src',
    css: 'href'
  }

  // 创建标签
  switch (codeType) {
    case 'css': {
      ele = document.createElement('style')
      break
    }
    default: {
      ele = document.createElement('script')
    }
  }

  switch (codeSource) {
    case 'url': {
      ele[linkKey[codeType]] = url
      break
    }
    default: {
      ele.innerHTML = code
    }
  }

  ele.id = `chrome-toolbox-${new Date().getTime()}`
  document.body.appendChild(ele)

  callback instanceof Function && callback(document.getElementById(ele.id) === ele)
})
