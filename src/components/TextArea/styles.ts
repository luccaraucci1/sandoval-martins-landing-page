import styled from 'styled-components'

export const TextAreaContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  padding: 0.5rem;

  textarea {
    width: 100%;
    color: white;
    border: 0;
    background: transparent;
    resize: none;

    &:focus {
      outline: none;
    }
  }
`
