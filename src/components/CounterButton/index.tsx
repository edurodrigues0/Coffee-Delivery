import { ButtonContainer, Container } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface CounterButtonProps {
  variant: 'small' | 'large'
  amount: number
  handleAccCoffee: () => void
  handleDescCoffee: () => void
  numberForDisabled?: number
}

export function CounterButton({
  variant,
  amount,
  handleAccCoffee,
  handleDescCoffee,
  numberForDisabled = 0,
}: CounterButtonProps) {
  return (
    <Container variant={variant}>
      <ButtonContainer
        onClick={handleDescCoffee}
        disabled={amount === numberForDisabled}
      >
        <Minus size={14} color="#8047F8" />
      </ButtonContainer>
      <span>{amount}</span>
      <ButtonContainer onClick={handleAccCoffee}>
        <Plus size={14} color="#8047F8" />
      </ButtonContainer>
    </Container>
  )
}
