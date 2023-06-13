import styled from 'styled-components'

interface CounterButtonProps {
  variant: 'small' | 'large'
}

export const Container = styled.div<CounterButtonProps>`
  background-color: ${(props) => props.theme.colors['base-button']};
  width: 72px;
  height: ${(props) => (props.variant === 'small' ? '32px' : '38px')};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  span {
    color: ${(props) => props.theme.colors['base-title']};
  }
`

export const ButtonContainer = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    box-shadow: none;
    outline-color: ${(props) => props.theme.colors.purple};
    outline-style: solid;
    outline-width: 2px;

    border-radius: 2px;
  }

  &:disabled {
    filter: opacity(0.3);
    cursor: not-allowed;
  }
`
