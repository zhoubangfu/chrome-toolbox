export const jsCopy = (value: string) => {
  const input = document.createElement('input')
  document.body.appendChild(input)

  input.setAttribute('value', value)
  input.select()

  document.execCommand('copy')

  document.body.removeChild(input)
}

export default {
  jsCopy
}
