import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5rem;

  img {
    width: 30.75rem;
    height: 18.25rem;
  }
`

export const Wrapper = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const OrderInfoContainer = styled.div`
  position: relative;
  width: 32.875rem;
  padding: 2.5rem;
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border: 1px solid transparent;
  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(45deg, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
`

export const OrderInfoWrapper = styled.div`
  display: flex;
  gap: 0.825rem;
  align-items: center;
`

interface IconContainerProps {
  color: string
}

export const IconContainer = styled.div<IconContainerProps>`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors[props.color]};
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const DescriptionItemContainer = styled.div`
  span {
    display: flex;
    gap: 4px;
  }

  h3:first-child,
  span:nth-child(2) {
    text-transform: capitalize;
  }

  h3,
  span {
    font-size: 1rem;
  }
`
