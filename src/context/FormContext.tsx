import {
  CheckoutFormData,
  checkoutFormValidationSchema,
} from '../schemas/zodSchemas'
import { ReactNode, createContext } from 'react'
import { UseFormReturn, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

interface FormContextProps {
  children: ReactNode
}

interface FormContextType {
  checkoutForm: UseFormReturn<CheckoutFormData>
  finalizeOrder: (data: CheckoutFormData) => void
}

export const FormContext = createContext({} as FormContextType)

export function FormContextProvider({ children }: FormContextProps) {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
    },
  })

  function finalizeOrder(data: CheckoutFormData) {
    console.log(data)
  }

  return (
    <FormContext.Provider
      value={{
        checkoutForm,
        finalizeOrder,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
