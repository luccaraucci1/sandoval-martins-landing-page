import { Logo, NavbarContainer } from './styles'

import logo from '../../../public/images/logo.png'

export function Navbar() {
  return (
    <NavbarContainer>
      <Logo>
        <img src={logo} width={40} height={40} alt="Logo Sandoval Martins" />
        <h1>Sandoval Martins</h1>
      </Logo>
    </NavbarContainer>
  )
}
