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
  QuickLinks,
  SocialMedia,
  SocialMediaIcon,
  TermsAndPolitics,
} from './styles'
import orangeLogo from '../../../public/images/orange-logo.png'
import { Mail } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'

import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'

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
            <Email href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@sandovalmartins.com">
              <span>contato@sandovalmartins.com</span>
              <Mail size={16} />
            </Email>
          </EmailContainer>
          <QuickLinks>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#lectures">Palestras</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </QuickLinks>
          <Contact>
            <h2>Contato</h2>
            <ContactInfo>
              <Item>
                <Icon>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Icon>
                <span>contato@sandovalmartins.com</span>
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
                <span>+55 11 98765 4321</span>
              </Item>
              <SocialMedia>
                <SocialMediaIcon href="https://www.instagram.com/sandoval.martins/">
                  <FontAwesomeIcon icon={faInstagram} />
                </SocialMediaIcon>
                <SocialMediaIcon href="https://www.facebook.com/profile.php?id=100002545952526">
                  <FontAwesomeIcon icon={faFacebookF} />
                </SocialMediaIcon>
                <SocialMediaIcon href="https://www.linkedin.com/in/sandoval-martins/">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </SocialMediaIcon>
              </SocialMedia>
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
