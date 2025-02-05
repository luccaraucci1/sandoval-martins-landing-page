import {
  Icon,
  Logo,
  LogoAndNavbar,
  Menu,
  NavbarContainer,
  NavbarItems,
  SocialMedia,
  SocialMediaAndMenu,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

import logo from '../../../public/images/logo.png'
import menuIcon from '../../../public/images/menu-icon.png'

export function Navbar() {
  return (
    <NavbarContainer>
      <LogoAndNavbar>
        <Logo>
          <img src={logo} width={40} height={40} alt="Logo Sandoval Martins" />
          <h1>Sandoval Martins</h1>
        </Logo>
        <NavbarItems>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Palestras</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </NavbarItems>
      </LogoAndNavbar>
      <SocialMediaAndMenu>
        <SocialMedia>
          <Icon>
            <FontAwesomeIcon size={'lg'} icon={faInstagram} />
          </Icon>
          <Icon>
            <FontAwesomeIcon size={'lg'} icon={faFacebookF} />
          </Icon>
          <Icon>
            <FontAwesomeIcon size={'lg'} icon={faLinkedinIn} />
          </Icon>
          <Icon>
            <FontAwesomeIcon size={'lg'} icon={faXTwitter} />
          </Icon>
        </SocialMedia>
        <Menu>
          <img src={menuIcon} width={22} alt="Icone de Menu" />
        </Menu>
      </SocialMediaAndMenu>
    </NavbarContainer>
  )
}
