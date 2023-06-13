import {
  ButtonGroupContainer,
  Container,
  DetailsContainer,
  Price,
  Wrapper,
} from './styles'
import { useContext, useEffect, useState } from 'react'

import { Button } from '../Button'
import { CoffeeContext } from '../../context/CoffeeContext'
import { CounterButton } from '../CounterButton'
import { Trash } from 'phosphor-react'
import coffeeImg from '../../assets/Coffee.svg'
import { formatToRealCurrencies } from '../../utils/FormatToRealCurrencies'

interface Cart {
  id: number
  name: string
  price: number
  amount: number
}

interface CoffeeSelectedProps {
  coffee: Cart
}

export function CoffeeSelected({ coffee }: CoffeeSelectedProps) {
  const { updateAmountCoffeeInCheckout, removeCoffeeInCart } =
    useContext(CoffeeContext)
  const [coffeeSelectedAmount, setCoffeeSelectedAmount] = useState(
    coffee.amount,
  )

  useEffect(() => {
    const updateCoffeeAmount = () => {
      updateAmountCoffeeInCheckout(coffee, coffeeSelectedAmount)
    }

    updateCoffeeAmount()

    return () => {
      updateCoffeeAmount()
    }
  }, [coffeeSelectedAmount])

  function handleAccCoffeCart() {
    setCoffeeSelectedAmount((state) => state + 1)
  }

  function handleDescCoffeCart() {
    setCoffeeSelectedAmount((state) => state - 1)
  }

  return (
    <Container>
      <Wrapper>
        <img src={coffeeImg} alt="imagem de uma xicara de café" />

        <DetailsContainer>
          <span>{coffee.name}</span>

          <ButtonGroupContainer>
            <CounterButton
              variant="small"
              amount={coffeeSelectedAmount}
              numberForDisabled={1}
              handleAccCoffee={handleAccCoffeCart}
              handleDescCoffee={handleDescCoffeCart}
            />

            <Button
              variant="small"
              onClick={() => removeCoffeeInCart(coffee.id)}
            >
              <Trash size={16} color="#8047F8" />
              <span>REMOVER</span>
            </Button>
          </ButtonGroupContainer>
        </DetailsContainer>
      </Wrapper>

      <Price>R$ {formatToRealCurrencies(coffee.price)}</Price>
    </Container>
  )
}
