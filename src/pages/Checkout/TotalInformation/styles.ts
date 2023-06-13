import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem;

  div:last-child {
    span {
      font-weight: 700;
      font-size: 1.25rem !important;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    line-height: 130%;

    span:first-child {
      font-size: 0.875rem;
    }
  }
`
