import styled from 'styled-components'

export const AboutContainer = styled.div`
  max-width: 1300px;
  margin: 8rem auto;
`

export const SoftSkills = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 4rem;
  }
`

export const Skill = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem;
  align-items: center;
  text-align: center;
  border-radius: 16px; /* Mantém as bordas arredondadas */
  margin-bottom: 3rem;

  img {
    margin: 2rem 0;
  }
  h1 {
    font-size: 22px;
    margin-bottom: 1rem;
  }
  span {
    padding: 0 1rem;
  }

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors['orange-300']},
      #290c0c
    );
    mask:
      linear-gradient(white 0 0) content-box,
      linear-gradient(white 0 0);
    -webkit-mask:
      linear-gradient(white 0 0) content-box,
      linear-gradient(white 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`
export const Experience = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const Years = styled.div`
  width: 39%;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors['background-secondary']} 50%,
    ${(props) => props.theme.colors['orange-300']}
  );
  border-radius: 16px;
  padding: 2rem 4rem 4rem 4rem;
  @media (max-width: 1024px) {
    width: auto;
    margin: 0 1rem;
  }
`

export const YearsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  h1 {
    font-size: 167.21px;
    color: ${(props) => props.theme.colors['orange-300']};
  }
  h2 {
    font-size: 48.14px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 100px;
    }
    h2 {
      font-size: 30px;
    }
  }
`

export const ExperienceRecord = styled.div`
  display: flex;
  width: 48%;
  flex-wrap: wrap;
  gap: 16px;
  @media (max-width: 1024px) {
    width: auto;
    justify-content: center;
  }
`

export const ExperienceRecordCard = styled.div`
  width: 300px;
  display: flex;
  border-radius: 16px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors['background-secondary']};
  h1 {
    font-size: 48px;
  }
  @media (max-width: 768px) {
    width: 150px;
    padding: 1rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 300px;
    padding: 1rem;
  }
`
