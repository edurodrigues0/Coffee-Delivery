import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-top-color: ${(props) => props.theme.colors.yellow};
  border-radius: 50%;
  animation: ${spin} 1s ease-in-out infinite;
`
