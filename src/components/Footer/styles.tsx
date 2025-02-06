import styled from 'styled-components'

export const FooterContainer = styled.div`
  background: ${(props) => props.theme.colors['background-secondary']};
  padding: 2rem 0;
`

export const FooterContentWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 4rem;
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 64px;
  }
`

export const EmailContainer = styled.div`
  width: 350px;
  @media (max-width: 768px) {
    width: auto;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const EmailHeader = styled.div`
  margin-bottom: 4rem;
  h1 {
    font-size: 45px;
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    h1 {
      font-size: 24px;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1rem;
  h2 {
    font-size: 32px;
  }
`

export const Email = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
  }
`

export const QuickLinks = styled.div`
  h2 {
    font-size: 24px;
    margin-bottom: 2rem;
  }
  ul {
    list-style-type: none;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`

export const Contact = styled.div`
  h2 {
    font-size: 24px;
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const ContactInfo = styled.div``

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  gap: 8px;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.border};
  svg {
    color: ${(props) => props.theme.colors['orange-300']};
  }
`
export const SocialMedia = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 1rem;
`

export const SocialMediaIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.border};
`

export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0 1rem 0;
  border-top: 2px solid ${(props) => props.theme.colors.border};
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 64px;
  }
`
export const DesignerAndRights = styled.div`
  display: flex;
  gap: 64px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

export const TermsAndPolitics = styled.div`
  display: flex;
  gap: 64px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`
