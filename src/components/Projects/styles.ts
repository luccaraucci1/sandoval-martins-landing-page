import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  margin-bottom: 8rem;
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
  }
`
export const HeaderDescription = styled.div`
  width: 600px;
  padding: 0 1rem;
  text-align: center;
  box-sizing: border-box;
`
export const ProjectsContent = styled.div`
  padding: 0 5rem;
`

export const ProjectsRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Project = styled.div`
  width: 500px;
  border: 1px solid red;
`

export const ProjectDescription = styled.div`
  display: flex;
  align-items: center;
`

export const ArrowIcon = styled.div`
  border: 1px solid ${(props) => props.theme.colors['orange-300']};
  width: 50px;
  padding: 0.25rem;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Description = styled.div``
