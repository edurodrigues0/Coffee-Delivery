import {
  ActionsContainer,
  Counter,
  HeaderContainer,
  LocationContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'

import { Button } from '../Button'
import { CoffeeContext } from '../../context/CoffeeContext'
import Logo from '../../assets/Logo.svg'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { cart } = useContext(CoffeeContext)
  const [isFullCart, setIsFullCart] = useState(false)
  const [totalItemInCart, setTotalItemInCart] = useState(0)
  const navigate = useNavigate()

  function handleRedirectToCheckout() {
    navigate('/checkout')
  }

  useEffect(() => {
    if (cart.length >= 1) {
      setIsFullCart(true)
    }
    if (cart.length <= 0) {
      setIsFullCart(false)
    }
    setTotalItemInCart(
      cart.reduce((acc, value) => {
        return acc + value.amount
      }, 0),
    )
  }, [cart.length, cart])

  return (
    <HeaderContainer>
      <a href="/">
        <img src={Logo} alt="" />
      </a>
      <ActionsContainer>
        <LocationContainer>
          <MapPin weight="fill" size={22} color="#8047f8" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <Button variant="cart" onClick={handleRedirectToCheckout}>
          <ShoppingCart size={22} weight="fill" />
        </Button>
      </ActionsContainer>
      {isFullCart === true && <Counter>{totalItemInCart}</Counter>}
    </HeaderContainer>
  )
}
