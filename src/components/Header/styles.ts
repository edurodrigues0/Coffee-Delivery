import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};
  font-size: 0.875rem;
`

export const Counter = styled.div`
  height: 20px;
  width: 20px;

  position: absolute;
  right: -0.52rem;
  top: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors['yellow-dark']};
  border-radius: 1000px;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.75rem;
`
