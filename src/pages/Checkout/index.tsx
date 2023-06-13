import {
  CheckoutFormData,
  checkoutFormValidationSchema,
} from '../../schemas/zodSchemas'
import {
  CheckoutWrapper,
  CoffeeCardContainer,
  Container,
  Divider,
  FormBoxContainerHeader,
  FormBoxWrapper,
  PaymentContainer,
} from './styles'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '../../components/Button'
import { CoffeeContext } from '../../context/CoffeeContext'
import { CoffeeSelected } from '../../components/CoffeeSelected'
import { Form } from './Form'
import { PaymentSelect } from '../../components/PaymentSelect'
import { TotalInformation } from './TotalInformation'
import { api } from '../../lib/api'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { zodResolver } from '@hookform/resolvers/zod'

export function Checkout() {
  const { cart } = useContext(CoffeeContext)
  const navigate = useNavigate()

  const methods = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })

  const { handleSubmit } = methods

  async function handleFinalizeOrder(data: CheckoutFormData) {
    if (cart.length === 0) {
      return alert('Adicione um café no carrinho')
    }

    const total = cart.reduce((acc, value) => {
      return acc + value.price * value.amount
    }, 0)

    const requestCoffeeData = {
      cep: data.cep,
      street: data.street,
      city: data.city,
      number: data.number,
      district: data.district,
      state: data.state,
      complement: data.complement,
      payment: data.payment,
      delivered: false,
      id: uuid(),
      createdAt: new Date(),
      coffees: cart,
      total: total + 3.5,
    }

    try {
      await api.post('/request', requestCoffeeData)
      localStorage.clear()
      navigate(`/success/${requestCoffeeData.id}`)
    } catch (error) {
      console.log('Erro ao pedir', error)
    }
  }

  return (
    <FormProvider {...methods}>
      <Container onSubmit={handleSubmit(handleFinalizeOrder)}>
        <CheckoutWrapper>
          <h1>Complete seu pedido</h1>
          <FormBoxWrapper>
            <FormBoxContainerHeader>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <h2>Endereço de Entrega</h2>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </FormBoxContainerHeader>

            <Form />
          </FormBoxWrapper>

          <PaymentContainer>
            <FormBoxContainerHeader>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <h2>Pagamento</h2>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </FormBoxContainerHeader>
            <PaymentSelect />
          </PaymentContainer>
        </CheckoutWrapper>

        <CheckoutWrapper>
          <h1>Cafés selecionados</h1>
          <CoffeeCardContainer>
            {cart.map((item) => (
              <div key={item.id}>
                <CoffeeSelected coffee={item} />
                <Divider />
              </div>
            ))}

            <TotalInformation />

            <Button variant="default" type="submit">
              CONFIRMAR PEDIDO
            </Button>
          </CoffeeCardContainer>
        </CheckoutWrapper>
      </Container>
    </FormProvider>
  )
}
