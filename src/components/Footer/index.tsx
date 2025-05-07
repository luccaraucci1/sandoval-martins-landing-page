import {
  Contact,
  ContactInfo,
  DesignerAndRights,
  Email,
  EmailContainer,
  EmailHeader,
  FooterContainer,
  FooterContent,
  FooterContentWrapper,
  FooterInfo,
  Icon,
  Item,
  Logo,
  TermsAndPolitics,
} from './styles'
import orangeLogo from '../../../public/images/orange-logo.png'
import { Mail } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContentWrapper>
        <FooterContent>
          <EmailContainer>
            <EmailHeader>
              <Logo>
                <img
                  src={orangeLogo}
                  width={32}
                  alt="Logo da Sandoval Martins"
                />
                <h2>Sandoval Martins</h2>
              </Logo>
              <h1>Estamos prontos para começar?</h1>
            </EmailHeader>
            <Email href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@sandovalmartins.com.br">
              <span>contato@sandovalmartins.com.br</span>
              <Mail size={16} />
            </Email>
          </EmailContainer>

          <Contact>
            <h2>Contato</h2>
            <ContactInfo>
              <Item>
                <Icon>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Icon>
                <span>contato@sandovalmartins.com.br</span>
              </Item>
              <Item>
                <Icon>
                  <FontAwesomeIcon icon={faLocationDot} />
                </Icon>
                <span>Alphaville</span>
              </Item>
              <Item>
                <Icon>
                  <FontAwesomeIcon icon={faPhone} />
                </Icon>
                <span>+55 11 91719-2907</span>
              </Item>
            </ContactInfo>
          </Contact>
        </FooterContent>
        <FooterInfo>
          <DesignerAndRights>
            <span>® {''}Sandoval Martins - All Rights Reserved</span>
          </DesignerAndRights>
          <TermsAndPolitics>
            <span>Termos & Condições</span>
            <span>Política de Privacidade</span>
          </TermsAndPolitics>
        </FooterInfo>
      </FooterContentWrapper>
    </FooterContainer>
  )
}
