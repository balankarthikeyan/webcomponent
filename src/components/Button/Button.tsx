import * as React from 'react'
import { StyledButton } from './styles'
interface ButtonProps {
  text?: string
}

function Button(props: ButtonProps) {
  const { text, ...balanceProps} = props
  return <StyledButton {...balanceProps}>{text || 'lorem ipsum'}</StyledButton>
}

export default Button
export { Button }
