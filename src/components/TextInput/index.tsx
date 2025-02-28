import { UseFormRegister } from 'react-hook-form'
import { TextInputContainer } from './styles'

interface TextInputProps {
  type: string
  id: 'name' | 'email' | 'message' | 'subject'
  register: UseFormRegister<{
    name: string
    email: string
    message: string
    subject: string
  }>
}

export function TextInput({ type, id, register }: TextInputProps) {
  return (
    <TextInputContainer>
      <input type={type} id={id} {...register(id)} />
    </TextInputContainer>
  )
}
