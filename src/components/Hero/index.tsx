import { Navbar } from '../Navbar'
import {
  HeroContent,
  HeroContentWrapper,
  HeroContainer,
  OrangeText,
  WhatsAppButton,
} from './styles'
import whatsappLogo from '../../../public/images/whatsapp.png'

export function Hero() {
  function handleWhatsAppButtonClick() {
    window.location.href = 'https://wa.me/5511917192907'
  }

  return (
    <HeroContainer>
      <HeroContentWrapper>
        <Navbar />

        <HeroContent>
          <h2>Vamos conversar?</h2>
          <h1>
            Meu nome é Sandoval Martins e sou{' '}
            <OrangeText>seu Consultor</OrangeText>
          </h1>
          <span>
            Executivo experiente, conselheiro de grandes empresas e mentor de
            muitos empresários e startups que hoje são unicórnios ou apresentam
            crescimento exponencial Minha missão é clara:{' '}
            <strong>
              ajudar empreendedores, executivos e conselheiros a entregar forte
              crescimento.
            </strong>
          </span>

          <WhatsAppButton onClick={() => handleWhatsAppButtonClick()}>
            <h1>WhatsApp</h1>
            <img src={whatsappLogo} width={32} alt="Logo do whatsapp" />
          </WhatsAppButton>
        </HeroContent>
      </HeroContentWrapper>
    </HeroContainer>
  )
}
