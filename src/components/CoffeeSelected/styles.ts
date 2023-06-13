import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.125rem;
  position: relative;
`

export const Wrapper = styled.div`
  img {
    width: 4rem;
    height: 4rem;
  }

  display: flex;
  gap: 0.625rem;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  span {
    display: block;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const ButtonGroupContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Price = styled.span`
  font-weight: 700;
  display: flex;
  align-items: center;
  text-align: right;
`
