import { Button } from '../Button'
import { TextArea } from '../TextArea'
import { TextInput } from '../TextInput'
import {
  ContactContainer,
  ContactDescription,
  ContactForm,
  ContactHeader,
  SendButton,
} from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

const contactFormSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter no mínimo 3 caracteres' }),
  email: z
    .string()
    .email({ message: 'Email inválido' })
    .min(5, { message: 'Email deve ter no mínimo 5 caracteres' }),
  subject: z
    .string()
    .min(5, { message: 'Assunto deve ter no mínimo 5 caracteres' }),
  message: z
    .string()
    .min(10, { message: 'Mensagem deve ter no mínimo 10 caracteres' }),
})

type ContactFormType = z.infer<typeof contactFormSchema>

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
  })

  async function sendMail(data: ContactFormType) {
    const msg = {
      to: 'luccaraucci@gmail.com', // Change to your recipient
      from: 'luccaraucci@gmail.com', // Change to your verified sender
      subject: data.subject,
      text: data.message,
      html: `
      <strong>Nome:</strong>${data.name}<br>
      <strong>Email:</strong>${data.email}<br>
      <strong>Assunto:</strong>${data.subject}<br>
      <strong>Mensagem:</strong><br>
      ${data.message}`,
    }

    try {
      await axios.post('http://localhost:3335/send-email', msg)
      alert('Email enviado com sucesso!')
      reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ContactContainer id="contact">
      <ContactHeader>
        <h2>CONTATO</h2>
        <h1>Mantenha-nos conectados</h1>
        <ContactDescription>
          <span>
            Entre em contato conosco para saber mais sobre nossos serviços
          </span>
        </ContactDescription>
      </ContactHeader>
      <ContactForm onSubmit={handleSubmit(sendMail)}>
        <label htmlFor="name">Nome:</label>
        <TextInput type="text" id="name" register={register} />
        <span>{errors.name?.message}</span>
        <label htmlFor="email">Email:</label>
        <TextInput type="email" id="email" register={register} />
        <span>{errors.email?.message}</span>
        <label htmlFor="subject">Assunto:</label>
        <TextInput type="text" id="subject" register={register} />
        <span>{errors.subject?.message}</span>
        <label htmlFor="message">Mensagem:</label>
        <TextArea id="message" register={register} />
        <span>{errors.message?.message}</span>
        <SendButton>
          <Button text="Enviar" type="submit" />
        </SendButton>
      </ContactForm>
    </ContactContainer>
  )
}
