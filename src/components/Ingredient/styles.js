import styled from "styled-components";
import media from "../../styles/media";

export const Container = styled.div`
  
  padding: 0.5rem;  
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT['600']};
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT['500'] : theme.COLORS.LIGHT['100']};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT['500']}` : "none"};
  
  > input {   
    max-width: 70px;    
    /* max-width: 110px; */
    height: 2.8rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT['100']};
    font-size: 0.9rem;
    background: transparent;
    border: none;
    
    &::placeholder {
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT['500'] : theme.COLORS.LIGHT['100']};
    }
  }

  > button {
    
    background: none;
    border: none;
    
    > svg {
      width: 100%;
      height: 100%;
      color: ${({ theme, isNew }) => !isNew ? `${theme.COLORS.LIGHT['100']}` : `${theme.COLORS.LIGHT['500']}`};
      
      &:hover {
        color: ${({ theme }) => theme.COLORS.LIGHT['100']};
      }
    }
  } 
  

  ${media.large`
    > input {      
      font-size: 1.2rem;
    }
  `};
`;
