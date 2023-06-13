import * as RadioGroup from '@radix-ui/react-radio-group'

import styled from 'styled-components'

export const Container = styled(RadioGroup.Root)`
  display: flex;
  gap: 0.75rem;
`

export const SelectTypePayment = styled(RadioGroup.Item)`
  padding: 1rem;
  width: 11.125rem;
  background-color: ${(props) => props.theme.colors['base-button']};
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.75rem;

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
  }

  &[data-state='checked'] {
    background-color: ${(props) => props.theme.colors['purple-light']};
    border: 1px solid #8047f8;
    border-radius: 6px;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`
