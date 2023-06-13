import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from '../lib/api'

interface Coffee {
  id: number
  name: string
  description: string
  types: string[]
  price: number
}

interface Cart extends Pick<Coffee, 'id' | 'name' | 'price'> {
  amount: number
}

interface CoffeeContextProps {
  children: ReactNode
}

interface CoffeeContextData {
  cart: Cart[]
  coffees: Coffee[]
  isLoading: boolean
  removeCoffeeInCart: (id: number) => void
  addCoffeeInCart: (coffe: Coffee, amount: number) => void
  updateAmountCoffeeInCheckout: (coffee: Cart, amount: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextData)

export function CoffeeContextProvider({ children }: CoffeeContextProps) {
  const [cart, setCart] = useState<Cart[]>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-1.0.0',
    )

    return storedStateAsJSON ? JSON.parse(storedStateAsJSON) : []
  })
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [isLoading, setIsLoading] = useState(false)

  async function loadCoffees() {
    setIsLoading(true)

    try {
      const response = await api.get('/coffees')
      setCoffees(response.data)
    } catch (error) {
      console.log('Error while fetching coffees:', error)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    loadCoffees()
  }, [])

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)

    localStorage.setItem('@coffee-delivery:cart-1.0.0', stateJSON)
  }, [cart])

  function addCoffeeInCart(data: Coffee, amount: number) {
    if (amount === 0) {
      return alert('Escolhe ao menos um café')
    }

    const existingCoffee = cart.find((item) => item.id === data.id)

    if (existingCoffee) {
      const updatedCart = cart.map((item) =>
        item.id === data.id ? { ...item, amount } : item,
      )
      setCart(updatedCart)
    } else {
      const newCartItem = {
        id: data.id,
        name: data.name,
        price: data.price,
        amount,
      }
      setCart([...cart, newCartItem])
    }
  }

  function updateAmountCoffeeInCheckout(coffee: Cart, amount: number) {
    setCart((state) =>
      state.map((item) => {
        if (item.id === coffee.id) {
          return { ...item, amount }
        }
        return item
      }),
    )
  }

  function removeCoffeeInCart(id: number) {
    const index = cart.findIndex((item) => item.id === id)

    if (index !== -1) {
      cart.splice(index, 1)
      setCart([...cart])
    }
  }

  return (
    <CoffeeContext.Provider
      value={{
        cart,
        coffees,
        isLoading,
        removeCoffeeInCart,
        addCoffeeInCart,
        updateAmountCoffeeInCheckout,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
