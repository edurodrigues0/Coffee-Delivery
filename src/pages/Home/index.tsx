import {
  BackgroundImageContainer,
  CoffeeListContainer,
  Container,
  IntroContainer,
  ItemsContainer,
  ListContainer,
  LoaderContainer,
  TitleContainer,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { CoffeeCard } from '../../components/CoffeeCard'
import { CoffeeContext } from '../../context/CoffeeContext'
import IntroImg from '../../assets/IntroImg.svg'
import { Item } from './Item'
import { LoaderComponent } from '../../components/LoaderComponent'
import { useContext } from 'react'

export function Home() {
  const { coffees, isLoading, cart } = useContext(CoffeeContext)

  return (
    <Container>
      <IntroContainer>
        <BackgroundImageContainer />
        <div>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TitleContainer>

          <ItemsContainer>
            <Item color="yellow-dark" text="Compra simples e segura">
              <ShoppingCart weight="fill" color="#ffffff" />
            </Item>

            <Item color="base-text" text="Embalagem mantém o café intacto">
              <Package weight="fill" color="#ffffff" />
            </Item>

            <Item color="yellow" text="Entrega rápida e rastreada">
              <Timer weight="fill" color="#ffffff" />
            </Item>

            <Item color="purple" text="O café chega fresquinho até você">
              <Coffee weight="fill" color="#ffffff" />
            </Item>
          </ItemsContainer>
        </div>

        <img src={IntroImg} alt="" />
      </IntroContainer>

      <CoffeeListContainer>
        <h2>Nossos cafés</h2>
        {isLoading ? (
          <LoaderContainer>
            <LoaderComponent />
          </LoaderContainer>
        ) : (
          <ListContainer>
            {coffees.map((coffee) => {
              const coffeeAmountInCart = cart.find(
                (item) => item.id === coffee.id,
              )

              return (
                <CoffeeCard
                  key={coffee.id}
                  data={coffee}
                  coffeeAmountInCart={coffeeAmountInCart?.amount}
                />
              )
            })}
          </ListContainer>
        )}
      </CoffeeListContainer>
    </Container>
  )
}
