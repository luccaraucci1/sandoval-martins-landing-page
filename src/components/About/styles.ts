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
  border-radius: 16px;
  margin-bottom: 3rem;

  img {
    margin: 2rem 0;
  }
  h1 {
    font-size: 24px;
    margin-bottom: 1rem;
  }
  span {
    padding: 0 1rem;
    font-size: 14px;
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
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 32px;
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

  span {
    color: ${(props) => props.theme.colors['text-secondary']};
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
  width: 250px;
  display: flex;
  border-radius: 16px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors['background-secondary']};
  h1 {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    width: 200px;
    padding: 1rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 300px;
    padding: 1rem;
  }
  span {
    font-size: 14px;
    text-align: center;
    padding: 0 1rem;
    color: ${(props) => props.theme.colors['text-secondary']};
  }
`
