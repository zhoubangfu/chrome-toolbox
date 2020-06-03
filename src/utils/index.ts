import { message } from 'antd'

message.config({
  maxCount: 1
})

export const jsCopy = (value: string) => {
  const input = document.createElement('input')
  document.body.appendChild(input)

  input.setAttribute('value', value)
  input.select()

  document.execCommand('copy')

  message.info('已复制！')

  document.body.removeChild(input)
}

export default {
  jsCopy
}
