import { UseFormRegister } from 'react-hook-form'
import { TextAreaContainer } from './styles'

interface TextAreaProps {
  id: 'name' | 'email' | 'message' | 'subject'
  register: UseFormRegister<{
    name: string
    email: string
    message: string
    subject: string
  }>
}

export function TextArea({ id, register }: TextAreaProps) {
  return (
    <TextAreaContainer>
      <textarea id={id} rows={5} {...register(id)} />
    </TextAreaContainer>
  )
}
