import styled from 'styled-components'

export const TextInputContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  padding: 0.5rem;
  max-width: 500px;

  input {
    width: 100%;
    color: white;
    border: 0;
    background: transparent;

    &:focus {
      outline: none;
    }
  }
`
