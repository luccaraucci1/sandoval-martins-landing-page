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
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
export function Footer() {
  return (
    <FooterContainer id="contact">
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
            <Email>
              <span>contato@sandovalmartins.com</span>
              <Mail size={16} />
            </Email>
          </EmailContainer>
          <QuickLinks>
            <h2>Quick Links</h2>
            <ul>
              <li>About Us</li>
              <li>Service</li>
              <li>Contact Us</li>
              <li>Blog Post</li>
              <li>Pricing</li>
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
                <SocialMediaIcon>
                  <FontAwesomeIcon icon={faInstagram} />
                </SocialMediaIcon>
                <SocialMediaIcon>
                  <FontAwesomeIcon icon={faFacebookF} />
                </SocialMediaIcon>
                <SocialMediaIcon>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </SocialMediaIcon>
                <SocialMediaIcon>
                  <FontAwesomeIcon icon={faXTwitter} />
                </SocialMediaIcon>
              </SocialMedia>
            </ContactInfo>
          </Contact>
        </FooterContent>
        <FooterInfo>
          <DesignerAndRights>
            <span>@datcho_desiner_2025</span>
            <span>®Sandoval Martins - All Rights Reserved</span>
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
