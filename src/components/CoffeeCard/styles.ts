import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 16rem;
  padding: 1.25rem;

  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    position: absolute;
    width: 120px;
    height: 120px;
    left: calc(50% - 120px / 2);
    top: -20px;
  }

  h3 {
    margin: 1rem 0 0.5rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: 0.875rem;
    text-align: center;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`

export const Tag = styled.h6`
  padding: 4px 8px;
  margin-top: 7rem;
  border-radius: 100px;

  background-color: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const BuyContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  column-gap: 1.5rem;
  margin-top: 2rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const PriceContainer = styled.span`
  font-size: 0.825rem;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
  }
`
