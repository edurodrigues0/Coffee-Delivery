import { FormContainer, Input } from './styles'

import { useFormContext } from 'react-hook-form'

export function Form() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      <Input
        placeholder="CEP"
        placeholderText="CEP"
        type="text"
        id="cep"
        {...register('cep')}
      />

      <Input
        placeholder="Rua"
        placeholderText="Rua"
        type="text"
        {...register('street')}
      />

      <Input
        placeholder="Número"
        placeholderText="Número"
        type="text"
        {...register('number')}
      />

      <Input
        placeholder="Complemento"
        placeholderText="Complemento"
        type="text"
        {...register('complement')}
      />

      <Input
        placeholder="Bairro"
        placeholderText="Bairro"
        type="text"
        {...register('district')}
      />

      <Input
        placeholder="Cidade"
        placeholderText="Cidade"
        type="text"
        {...register('city')}
      />

      <Input
        placeholder="UF"
        placeholderText="UF"
        type="text"
        {...register('state')}
      />
    </FormContainer>
  )
}
