import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1.4rem;
  gap: 1.4rem;

  border: none;
  resize: none; 

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.DARK['800']};  
  color: ${({ theme }) => theme.COLORS.LIGHT['500']};
  
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT['500']};
  }
`