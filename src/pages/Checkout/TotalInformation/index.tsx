import { CoffeeContext } from '../../../context/CoffeeContext'
import { Container } from './styles'
import { formatToRealCurrencies } from '../../../utils/FormatToRealCurrencies'
import { useContext } from 'react'

export function TotalInformation() {
  const { cart } = useContext(CoffeeContext)

  const total = cart.reduce((acc, value) => {
    return acc + value.price * value.amount
  }, 0)

  return (
    <Container>
      <div>
        <span>Total de itens</span>
        <span>R$ {formatToRealCurrencies(total)}</span>
      </div>

      <div>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </div>

      <div>
        <span>Total</span>
        <span>R$ {formatToRealCurrencies(total + 3.5)}</span>
      </div>
    </Container>
  )
}
