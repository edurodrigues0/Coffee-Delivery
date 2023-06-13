import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ButtonContainer } from './styles'

type ButtonVariant = 'default' | 'cart' | 'small' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
  children?: ReactNode
}

export function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  )
}
