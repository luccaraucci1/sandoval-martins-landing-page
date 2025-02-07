import styled from 'styled-components'

export const LecturesContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  margin-bottom: 8rem;
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`
export const LecturesHeader = styled.div`
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
export const HeaderDescription = styled.div`
  width: 600px;
  padding: 0 5rem;
  text-align: center;
  box-sizing: border-box;
`

export const LecturesContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rem;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const PositiveFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 4rem;
`

export const Feature = styled.div`
  width: 630px;
  padding: 2rem;
  border-radius: 16px;

  background: ${(props) => props.theme.colors['background-secondary']};
  h1 {
    font-size: 24px;
    margin-bottom: 2rem;
  }
  span {
    color: ${(props) => props.theme.colors['text-secondary']};
  }

  @media (max-width: 768px) {
    width: auto;
  }
`
