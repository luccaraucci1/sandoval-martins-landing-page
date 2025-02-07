import styled from 'styled-components'

export const CompanyLogosContainer = styled.div`
  display: grid;
  border-radius: 16px;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid ${(props) => props.theme.colors['background-secondary']};
  background: ${(props) => props.theme.colors['background-terciary']};
  overflow: hidden;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 8rem;
  }
`

export const Company = styled.div`
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors['background-secondary']};

  img {
    &:hover {
      filter: brightness(0) saturate(100%) invert(38%) sepia(27%)
        saturate(5986%) hue-rotate(335deg) brightness(112%) contrast(113%);
    }
  }
`
