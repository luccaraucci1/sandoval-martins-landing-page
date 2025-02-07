import styled from 'styled-components'

export const LectureModelsContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  margin-bottom: 8rem;
  @media (max-width: 1024px) {
    margin: 0 1rem;
    margin-bottom: 4rem;
  }
`
export const Header = styled.div`
  width: 400px;
  h2 {
    font-size: 18px;
    color: ${(props) => props.theme.colors['orange-300']};
    letter-spacing: 0.1rem;
  }
  h1 {
    font-size: 48px;
  }
`

export const Content = styled.div`
  &:last-child {
    border-bottom: 2px solid ${(props) => props.theme.colors.border};
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 0;
  gap: 32px;
  border-top: 2px solid ${(props) => props.theme.colors.border};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Icon = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

export const Title = styled.div`
  width: 380px;
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const Description = styled.div`
  width: 540px;
  color: ${(props) => props.theme.colors['text-secondary']};
  @media (max-width: 768px) {
    width: auto;
  }
`

export const IconAndTitleMobile = styled.div`
  display: flex;
  gap: 32px;
`

export const IconMobile = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`

export const TitleMobile = styled.div`
  width: auto;
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 18px;
  }
  @media (min-width: 769px) {
    display: none;
  }
`

export const More = styled.a`
  display: flex;
  letter-spacing: 1.28px;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
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
