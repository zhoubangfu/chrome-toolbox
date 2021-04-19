export const jsCopy = (value: string): void => {
  const input = document.createElement('input')
  document.body.appendChild(input)

  input.setAttribute('value', value)
  input.style.position = 'absolute'
  input.select()

  document.execCommand('copy')

  document.body.removeChild(input)
}
const obj = {
  jsCopy
}
export default obj
