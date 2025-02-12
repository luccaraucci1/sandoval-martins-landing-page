import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Close, Icon, MobileMenuContainer, SocialMedia } from './styles'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
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
        <Icon href="https://www.instagram.com/sandoval.martins/">
          <FontAwesomeIcon icon={faInstagram} />
        </Icon>
        <Icon href="https://www.facebook.com/profile.php?id=100002545952526">
          <FontAwesomeIcon icon={faFacebookF} />
        </Icon>
        <Icon href="https://www.linkedin.com/in/sandoval-martins/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Icon>
      </SocialMedia>
    </MobileMenuContainer>
  )
}
