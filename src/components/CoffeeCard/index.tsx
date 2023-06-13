import {
  BuyContainer,
  Container,
  PriceContainer,
  Tag,
  TagsContainer,
} from './styles'
import { useContext, useState } from 'react'

import { Button } from '../Button'
import { CoffeeContext } from '../../context/CoffeeContext'
import CoffeeImg from '../../assets/Coffee.svg'
import { CounterButton } from '../CounterButton'
import { ShoppingCart } from 'phosphor-react'
import { formatToRealCurrencies } from '../../utils/FormatToRealCurrencies'

interface Coffee {
  id: number
  name: string
  description: string
  price: number
  types: string[]
}

interface CoffeeCardProps {
  data: Coffee
  coffeeAmountInCart?: number
}

export function CoffeeCard({ data, coffeeAmountInCart = 0 }: CoffeeCardProps) {
  const [coffeeAmount, setCoffeeAmount] = useState(coffeeAmountInCart)
  const { addCoffeeInCart } = useContext(CoffeeContext)

  function accCoffee() {
    setCoffeeAmount((state) => state + 1)
  }

  function descCoffee() {
    if (coffeeAmount === 0) {
      return
    }

    setCoffeeAmount((state) => state - 1)
  }

  return (
    <Container>
      <img src={CoffeeImg} alt="" />
      <TagsContainer>
        {data.types.map((type) => (
          <Tag key={type}>{type}</Tag>
        ))}
      </TagsContainer>
      <h3>{data.name}</h3>
      <span>{data.description}</span>
      <BuyContainer>
        <PriceContainer>
          R$ <span>{formatToRealCurrencies(data.price)}</span>
        </PriceContainer>
        <div>
          <CounterButton
            variant="large"
            amount={coffeeAmount}
            handleAccCoffee={accCoffee}
            handleDescCoffee={descCoffee}
          />
          <Button
            variant="icon"
            onClick={() => addCoffeeInCart(data, coffeeAmount)}
          >
            <ShoppingCart color="#ffffff" weight="fill" size={22} />
          </Button>
        </div>
      </BuyContainer>
    </Container>
  )
}
