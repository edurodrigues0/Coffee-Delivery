import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  variant: 'default' | 'cart' | 'icon' | 'small'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 0;
  cursor: pointer;

  ${(props) =>
    props.variant === 'default' &&
    css`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
      border-radius: 6px;

      background-color: ${(props) => props.theme.colors.yellow};
      color: ${(props) => props.theme.colors.white};

      &:hover {
        background-color: ${(props) => props.theme.colors['yellow-dark']};
        transition: background-color 0.2s;
      }
    `}

  ${(props) =>
    props.variant === 'icon' &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 6px;

      background-color: ${(props) => props.theme.colors['purple-dark']};
      color: ${(props) => props.theme.colors['base-card']};

      &:hover {
        background-color: ${(props) => props.theme.colors.purple};
        transition: background-color 0.2s;
      }
    `}

  ${(props) =>
    props.variant === 'cart' &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      border-radius: 6px;
      padding: 0.5rem;

      background-color: ${(props) => props.theme.colors['yellow-light']};
      color: ${(props) => props.theme.colors['yellow-dark']};
    `}

  ${(props) =>
    props.variant === 'small' &&
    css`
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      border-radius: 6px;
      padding: 6.5px 8px;

      background-color: ${(props) => props.theme.colors['base-button']};
      font-size: 0.75rem;

      &:hover {
        background-color: ${(props) => props.theme.colors['base-hover']};
        transition: background-color 0.2s;
      }
    `}
`
