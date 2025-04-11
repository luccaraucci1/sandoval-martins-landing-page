import { Button } from '../Button'
import { TextArea } from '../TextArea'
import { TextInput } from '../TextInput'
import {
  ContactContainer,
  ContactDescription,
  ContactForm,
  ContactHeader,
  FormItems,
  FormItemsAndWhatsAppButton,
  SendButton,
  WhatsAppButton,
} from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import supabase from '../../utils/supabase'
import whatsappLogo from '../../../public/images/whatsapp.png'

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
    try {
      await supabase.from('Contacts').insert({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        createdAt: new Date(),
      })
      alert('Mensagem enviada com sucesso!')
      reset()
    } catch (err) {
      console.log(err)
    }
  }

  function handleWhatsAppButtonClick() {
    window.location.href = 'https://wa.me/5511917192907'
  }

  return (
    <ContactContainer id="contact">
      <ContactHeader>
        <h2>Fale comigo agora</h2>
        <h1>Mantenha-nos conectados</h1>
        <ContactDescription>
          <span>
            Eu te ajudo a responder essas perguntas e a executar seu plano de
            crescimento e expansão
          </span>
        </ContactDescription>
      </ContactHeader>
      <ContactForm onSubmit={handleSubmit(sendMail)}>
        <FormItemsAndWhatsAppButton>
          <FormItems>
            <label htmlFor="name">Nome:</label>
            <TextInput type="text" id="name" register={register} />
            <span>{errors.name?.message}</span>
            <label htmlFor="email">Email:</label>
            <TextInput type="email" id="email" register={register} />
            <span>{errors.email?.message}</span>
            <label htmlFor="subject">Assunto:</label>
            <TextInput type="text" id="subject" register={register} />
            <span>{errors.subject?.message}</span>
          </FormItems>
          <WhatsAppButton onClick={handleWhatsAppButtonClick}>
            <span>Ou me chame no WhatsApp</span>
            <img
              src={whatsappLogo}
              width={40}
              height={40}
              alt="Logo do whatsapp"
            />
          </WhatsAppButton>
        </FormItemsAndWhatsAppButton>
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
