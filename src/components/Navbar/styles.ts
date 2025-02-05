import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  justify-content: space-between;
`

export const LogoAndNavbar = styled.div`
  display: flex;
  gap: 100px;
`

export const Logo = styled.div`
  display: flex;
  gap: 8px;
`

export const NavbarItems = styled.div`
  display: flex;
  font-weight: 500px;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    gap: 25px;
    a {
      text-decoration: none;
      transition: color 0.2s ease-in-out;
      &:hover {
        color: ${(props) => props.theme.colors['orange-300']};
      }
      &:visited {
        color: white;
        &:hover {
          color: ${(props) => props.theme.colors['orange-300']};
        }
      }
    }
  }
`

export const SocialMediaAndMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
export const SocialMedia = styled.div`
  display: flex;
  gap: 8px;
`

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  padding: 0.1rem;
  background-color: #171110;
  display: flex;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
`

export const Menu = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  background-color: ${(props) => props.theme.colors['orange-300']};
  border-radius: 100%;
  align-items: center;
  justify-content: center;
`
