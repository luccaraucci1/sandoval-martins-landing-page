import styled from 'styled-components'
import heroBg from '../../../public/images/hero.png'

export const HeroContainer = styled.div`
  background: url(${heroBg});

  height: 800px;
`

export const HeroContentWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const HeroContent = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  width: 630px;
  gap: 2rem;

  h2 {
    font-size: 28px;
  }

  h1 {
    font-size: 48px;
  }

  span {
    color: ${(props) => props.theme.colors['text-secondary']};
  }
  @media (max-width: 768px) {
    width: auto;
    padding: 0 1rem;
  }
`

export const OrangeText = styled.h1`
  display: inline-flex;
  color: ${(props) => props.theme.colors['orange-300']} !important;
`

export const WhatsAppButton = styled.button`
  width: 186px;
  background: transparent;
  color: white;
  border: 1px solid ${(props) => props.theme.colors['text-secondary']};
  display: flex;
  padding: 0.75rem;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  gap: 16px;
  cursor: pointer;

  h1 {
    font-size: 16px;
    margin: auto 0;
  }
`
