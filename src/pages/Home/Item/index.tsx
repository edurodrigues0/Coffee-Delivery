import { ItemContent } from './styles'
import { ReactNode } from 'react'

interface ItemsProps {
  children: ReactNode
  text: string
  color: string
}

export function Item({ children, text, color }: ItemsProps) {
  return (
    <ItemContent color={color}>
      <div>{children}</div>
      <span>{text}</span>
    </ItemContent>
  )
}
