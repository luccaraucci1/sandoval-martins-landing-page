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
    window.location.href = 'https://wa.me/5511987654321'
  }

  return (
    <HeroContainer>
      <HeroContentWrapper>
        <Navbar />

        <HeroContent>
          <h2>Vamos conversar?</h2>
          <h1>
            Meu nome é Sandoval Martins e sou{' '}
            <OrangeText>palestrante.</OrangeText>
          </h1>
          <span>
            CEO de grandes empresas e palestrante renomado, compartilho
            estratégias e experiências para impulsionar carreiras e negócios.
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
