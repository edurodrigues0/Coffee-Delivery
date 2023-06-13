import styled from "styled-components";

interface ItemContentProps {
  color: string;
}

export const ItemContent = styled.div<ItemContentProps>`
  width: 18.375rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  
  div {
    padding: 0.5rem;
    background-color: ${props => props.theme.colors[props.color]};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`