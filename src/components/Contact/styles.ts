import styled from 'styled-components'

export const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    margin: 0 1rem;
    margin-bottom: 4rem;
  }
`

export const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 4rem;
  h2 {
    font-size: 18px;
    color: ${(props) => props.theme.colors['orange-300']};
    letter-spacing: 0.1rem;
  }
`
export const ContactDescription = styled.div`
  width: 600px;
  padding: 0 1rem;
  text-align: center;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: auto;
  }
`
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  padding: 2rem;
  gap: 0.5rem;

  h2 {
    margin-bottom: 1rem;
  }

  label {
    font-weight: bold;
  }

  span {
    color: red;
    font-size: 0.8rem;
    font-weight: bold;
  }
`

export const SendButton = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`
