import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  
  background-color: ${({ theme }) => theme.COLORS.DARK['800']};
  color: ${({ theme }) => theme.COLORS.LIGHT['500']};
  
  border-radius: .8rem; 
  
  > input {    
    height: 4.8rem;
    width: 100%;
    
    padding: 1.2rem 1.7rem;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT['500']};
    border: 0;

    font-size: 1.6rem;
    font-weight: 400;    
  } 

  > svg {
    margin-left: 1.4rem;
    font-size: 2rem;    
  }
`