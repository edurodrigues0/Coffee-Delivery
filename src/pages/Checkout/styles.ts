import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  gap: 2rem;
`

export const CheckoutWrapper = styled.div`
  margin-top: 2.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const FormBoxWrapper = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
`

export const FormBoxContainerHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  margin-bottom: 2rem;

  div {
    h2 {
      font-size: 1rem;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
    span {
      font-size: 0.875rem;
    }
  }
`

export const PaymentContainer = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['base-card']};
`

export const CoffeeCardContainer = styled.div`
  width: 28rem;
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  background-color: ${(props) => props.theme.colors['base-card']};
`

export const Divider = styled.div`
  flex: 1;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  margin: 1.5rem 0;
`

export const TotalDetailContainer = styled.div``
