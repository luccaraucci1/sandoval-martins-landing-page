import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 250px;
  padding: 1rem;
  margin-top: 1rem;
  border: 0;
  border-radius: 8px;
  background: ${(props) => props.theme.colors['orange-300']};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: ${(props) => props.theme.colors['orange-400']};
  }
`
