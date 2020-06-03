import axios from '@/utils/request'

// 请求缩略列表
export const requestSynopsis = (params?: object) =>
  axios.get('/index/synopsis', { params })

// 搜索建议
export const baiduSuggest = (keyword: string | number) =>
  axios({
    method: 'GET',
    url: `http://suggestion.baidu.com/su?wd=${keyword}&ie=UTF-8&action=opensearch`
  })
