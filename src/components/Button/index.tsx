import { ButtonContainer } from './styles'

interface ButtonProps {
  text: string
  type: 'submit' | 'reset' | 'button' | undefined
}

export function Button({ text, type }: ButtonProps) {
  return <ButtonContainer type={type}>{text}</ButtonContainer>
}
