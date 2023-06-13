import {
  Container,
  DescriptionItemContainer,
  IconContainer,
  OrderInfoContainer,
  OrderInfoWrapper,
  Wrapper,
} from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { LoaderComponent } from '../../components/LoaderComponent'
import { api } from '../../lib/api'
import deliverymanImg from './../../assets/Deliveryman.png'
import { useParams } from 'react-router-dom'

interface InfoProps {
  complement: string
  street: string
  district: string
  city: string
  state: string
  payment: string
  number: string
  delivered: boolean
}

export function Success() {
  const { requestId } = useParams()
  const [info, setInfo] = useState<InfoProps | undefined>()

  useEffect(() => {
    api
      .get(`/request/${requestId}`)
      .then((response) => {
        setInfo(response.data)
      })
      .catch((error) => {
        console.log('Error while fetching request info:', error)
      })
  }, [requestId])

  function formattedPayment(type: string | undefined) {
    if (type === 'debit') return 'Débito'
    if (type === 'credit') return 'Cartão de Crédito'
    return 'Dinheiro'
  }

  return (
    <Container>
      <Wrapper>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>

        <OrderInfoContainer>
          {info ? (
            <>
              <OrderInfoWrapper>
                <IconContainer color="purple">
                  <MapPin color="#FFF" size={16} />
                </IconContainer>
                <DescriptionItemContainer>
                  <span>
                    Entrega em{' '}
                    <h3>
                      {info.street}, {info.number}
                    </h3>
                  </span>
                  <span>
                    {info.district} - {info.city}, {info.state}
                  </span>
                </DescriptionItemContainer>
              </OrderInfoWrapper>

              <OrderInfoWrapper>
                <IconContainer color="yellow">
                  <Timer color="#FFF" size={16} weight="fill" />
                </IconContainer>
                <DescriptionItemContainer>
                  <span>Previsão de entrega</span>
                  <h3>{info.delivered ? 'Entregue ✓' : '20 min - 30 min'}</h3>
                </DescriptionItemContainer>
              </OrderInfoWrapper>

              <OrderInfoWrapper>
                <IconContainer color="yellow-dark">
                  <CurrencyDollar color="#FFF" size={16} />
                </IconContainer>
                <DescriptionItemContainer>
                  <span>Pagamento na entrega</span>
                  <h3>{formattedPayment(info.payment)}</h3>
                </DescriptionItemContainer>
              </OrderInfoWrapper>
            </>
          ) : (
            <LoaderComponent />
          )}
        </OrderInfoContainer>
      </Wrapper>

      <img src={deliverymanImg} alt="Um homem andando em uma moto" />
    </Container>
  )
}
