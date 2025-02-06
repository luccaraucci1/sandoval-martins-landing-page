import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Close, Icon, MobileMenuContainer, SocialMedia } from './styles'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { X } from 'lucide-react'
import { SetStateAction } from 'react'

interface MobileMenuProps {
  openMobileMenu: boolean
  setOpenMobileMenu: React.Dispatch<SetStateAction<boolean>>
}

export function MobileMenu({
  openMobileMenu,
  setOpenMobileMenu,
}: MobileMenuProps) {
  return (
    <MobileMenuContainer show={openMobileMenu}>
      <Close>
        <X onClick={() => setOpenMobileMenu(false)} />
      </Close>
      <ul>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="#about">
          <li>Sobre</li>
        </a>
        <a href="#lectures">
          <li>Palestras</li>
        </a>
        <a href="#projects">
          <li>Projetos</li>
        </a>
        <a href="#contact">
          <li>Contato</li>
        </a>
      </ul>
      <SocialMedia>
        <Icon>
          <FontAwesomeIcon icon={faInstagram} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faFacebookF} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faXTwitter} />
        </Icon>
      </SocialMedia>
    </MobileMenuContainer>
  )
}
