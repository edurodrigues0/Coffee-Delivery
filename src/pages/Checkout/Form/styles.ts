import styled from 'styled-components'

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 12.5rem);
  gap: 1rem 0.75rem;
`

interface MyInputProps {
  placeholderText: string
}

export const Input = styled.input<MyInputProps>`
  padding: 0.75rem;
  background-color: ${(props) => props.theme.colors['base-input']};
  border: 1px solid #e6e5e5;
  border-radius: 4px;

  ::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: 0.875rem;
  }

  ${(props) =>
    props.placeholderText === 'CEP' &&
    `
      grid-column-start: 1;
      grid-column-end: 4;
      width: 12.5rem;
    `}

  ${(props) =>
    props.placeholderText === 'Rua' &&
    `
        grid-column-start: 1;
        grid-column-end: 4;
      `}

  ${(props) =>
    props.placeholderText === 'Complemento' &&
    `
        grid-column-start: 2;
        grid-column-end: 4;
        position: relative;
      `}

    ${(props) =>
    props.placeholderText === 'Cidade' &&
    `
        grid-column-start: 2;
        grid-column-end: 3;
        width: 276px;
      `}

    ${(props) =>
    props.placeholderText === 'UF' &&
    `
        grid-column-start: 3;
        width: 3.75rem;
      `}
`
