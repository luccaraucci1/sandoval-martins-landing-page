import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    margin: 0 1rem;
    margin-bottom: 4rem;
  }
`
export const ProjectsHeader = styled.div`
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
  padding: 0 1rem;
  text-align: center;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: auto;
  }
`
export const ProjectsContent = styled.div`
  padding: 0 3rem;
`

export const ProjectsRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProjectDescription = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 0;
  gap: 32px;
  h1 {
    font-size: 22px;
    margin-bottom: 1rem;
  }
  > div {
    display: flex;
    @media (max-width: 768px) {
      align-items: center;
    }
  }
`

export const ArrowIcon = styled.div`
  border: 1px solid ${(props) => props.theme.colors['orange-300']};
  width: 40px;
  height: 40px;
  padding: 0.25rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  transition: background-color 0.2s ease-in-out;
`

export const Project = styled.a`
  width: 550px;
  cursor: pointer;
  color: white;
  text-decoration: none;

  &:visited {
    text-decoration: none;
    color: white;
  }

  &:hover ${ArrowIcon} {
    background-color: ${(props) => props.theme.colors['orange-300']};
  }
  @media (max-width: 768px) {
    width: auto;
    img {
      width: 300px;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    img {
      width: 600px;
    }
  }
`

export const Description = styled.div`
  width: 450px;
  @media (max-width: 768px) {
    width: auto;
  }
`
