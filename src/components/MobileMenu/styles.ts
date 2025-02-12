import styled from 'styled-components'

export const MobileMenuContainer = styled.div<{ show: boolean }>`
  position: absolute;
  background: ${(props) => props.theme.colors['orange-300']};
  width: 270px;
  height: 330px;
  top: 60px;
  left: 90px;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 2rem;
  display: ${(props) => (props.show ? 'block' : 'none')};
  ul {
    list-style-type: none;
    margin-bottom: 1rem;
    li {
      padding: 0.3rem 0;
      border-bottom: 1px solid ${(props) => props.theme.colors.border};
    }
    a {
      text-decoration: none;
      color: white;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    top: 60px;
    left: 465px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`
export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
`

export const SocialMedia = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`

export const Icon = styled.a`
  width: 30px;
  height: 30px;
  padding: 0.1rem;
  background-color: #171110;
  display: flex;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  color: white;
  &:hover {
    color: ${(props) => props.theme.colors['orange-300']};
  }
  &:visited {
    color: white;
    &:hover {
      color: ${(props) => props.theme.colors['orange-300']};
    }
  }
`
