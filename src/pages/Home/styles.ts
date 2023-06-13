import BackgroundImage from '../../assets/Background.svg'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.75rem 0;
  position: relative;
`

export const BackgroundImageContainer = styled.div`
  position: absolute;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: center;
  left: -120px;
  right: 120px;
  top: 0;
  bottom: 0;
  filter: blur(80px);
`

export const TitleContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-title']};
  }

  span {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const ItemsContainer = styled.div`
  margin-top: 4.125rem;
  height: 5.25rem;
  display: flex;
  gap: 1.25rem 2.5rem;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const CoffeeListContainer = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 3.375rem;
  padding: 2rem 0 9.8rem 0;
`

export const LoaderContainer = styled.div`
  margin: 0 auto;
`

export const ListContainer = styled.div`
  display: flex;
  gap: 2.5rem 2rem;
  justify-content: flex-start;
  flex-wrap: wrap;
`
