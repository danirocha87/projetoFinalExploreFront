import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.TOMATO['100']};
  color: ${({ theme }) => theme.COLORS.LIGHT['100']};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 3.2rem;
  gap: .8rem;
  
  width: 100%;
  height: 4.8rem;

  border-radius: .5rem;
  border: 0;

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;  
  text-align: center;

  &:disabled {
    opacity: .5;
  }

  > svg {
    gap: .8rem;
  } 
`