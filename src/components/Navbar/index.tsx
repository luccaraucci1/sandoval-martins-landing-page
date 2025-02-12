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
} from '@fortawesome/free-brands-svg-icons'

import logo from '../../../public/images/logo.png'
import menuIcon from '../../../public/images/menu-icon.png'
import { MobileMenu } from '../MobileMenu'
import { useState } from 'react'

export function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  return (
    <NavbarContainer>
      <LogoAndNavbar>
        <Logo>
          <img src={logo} width={40} height={40} alt="Logo Sandoval Martins" />
          <h1>Sandoval Martins</h1>
        </Logo>
        <NavbarItems>
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
        </NavbarItems>
      </LogoAndNavbar>
      <SocialMediaAndMenu>
        <SocialMedia>
          <Icon href="https://www.instagram.com/sandoval.martins/">
            <FontAwesomeIcon size={'lg'} icon={faInstagram} />
          </Icon>
          <Icon href="https://www.facebook.com/profile.php?id=100002545952526">
            <FontAwesomeIcon size={'lg'} icon={faFacebookF} />
          </Icon>
          <Icon href="https://www.linkedin.com/in/sandoval-martins/">
            <FontAwesomeIcon size={'lg'} icon={faLinkedinIn} />
          </Icon>
        </SocialMedia>

        <Menu onClick={() => setOpenMobileMenu(true)}>
          <img src={menuIcon} width={22} alt="Icone de Menu" />
        </Menu>
        <MobileMenu
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />
      </SocialMediaAndMenu>
    </NavbarContainer>
  )
}
