import * as React from 'react'

interface ButtonProps {
  text?: string
}
function Button(props: ButtonProps) {
  const {text} = props
  return <button>{text || 'lorem ipsum'}</button>
}

export default Button
export { Button }
