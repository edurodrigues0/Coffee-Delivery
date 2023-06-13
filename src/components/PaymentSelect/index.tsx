import * as RadioGroup from '@radix-ui/react-radio-group'

import { Bank, CreditCard, Money } from 'phosphor-react'
import { Container, SelectTypePayment } from './styles'
import { useEffect, useState } from 'react'

import { useFormContext } from 'react-hook-form'

export function PaymentSelect() {
  const { setValue } = useFormContext()
  const [paymentSelected, setPaymentSelected] = useState('credit')

  useEffect(() => {
    setValue('payment', paymentSelected)
  }, [setValue, paymentSelected])

  return (
    <Container>
      <SelectTypePayment
        value={'credit'}
        id="r1"
        onClick={(e) => setPaymentSelected(e.currentTarget.value)}
      >
        <RadioGroup.Indicator />
        <span>
          <CreditCard size={16} color="#8047f8" />
          Cartão de credito
        </span>
      </SelectTypePayment>

      <SelectTypePayment
        value={'debit'}
        id="r2"
        onClick={(e) => setPaymentSelected(e.currentTarget.value)}
      >
        <RadioGroup.Indicator />
        <span>
          <Bank size={16} color="#8047f8" />
          Cartão de débito
        </span>
      </SelectTypePayment>

      <SelectTypePayment
        value={'money'}
        id="r3"
        onClick={(e) => setPaymentSelected(e.currentTarget.value)}
      >
        <RadioGroup.Indicator />
        <span>
          <Money size={16} color="#8047f8" />
          Dinheiro
        </span>
      </SelectTypePayment>
    </Container>
  )
}
