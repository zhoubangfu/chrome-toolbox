// 生产环境存在变量
declare let chrome: any

export const ranges: any = {
  m10: 600000,
  m15: 900000,
  m30: 1800000,
  h1: 3600000,
  h2: 7200000,
  h5: 18000000,
  d1: 86400000,
  w1: 604800000,
  M1: 2592000000,
  all: new Date().getTime()
}
export const getTargetSetting = (selectedTypes: Array<string>): any => {
  const defaultSetting = {
    history: false,
    cache: false,
    cookies: false,
    downloads: false,
    formData: false,
    appcache: false,
    fileSystems: false,
    localStorage: false,
    indexedDB: false,
    serverBoundCertificates: false,
    pluginData: false,
    passwords: false,
    webSQL: false
  }

  return {
    ...defaultSetting,
    ...selectedTypes.reduce((target: any, type: string) => {
      return {
        ...target,
        [type]: true
      }
    }, {})
  }
}
export const handleDo = (
  selectedTypes: Array<string>,
  rangeName: string,
  callback: () => any
): void => {
  chrome.browsingData.remove(
    {
      since: new Date().getTime() - ranges[rangeName]
    },
    getTargetSetting(selectedTypes),
    callback
  )
}
