import styled from "styled-components"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import media from "../../styles/media"

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;  
  flex-direction: column;
  justify-content: center;

  margin: 15.6rem auto;

  ${media.small`
  `};
  ${media.medium`
  `};
  ${media.large`
    margin: 9rem auto;

    flex-direction: row;
    gap: 16rem;
  `};
  ${media.exlarge`
    gap: 30.6rem;
  `};
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  
  

  h3 {
    display: none;
  }  

  .name {    
    margin-top: 7.3rem;
    width: 100%;
  } 
  
  .password, .email {
    margin-top: 3.2rem;
    width: 100%;
  }
  
  .labels {
    display: flex;
    margin-bottom: .8rem;
    font-size: 1.6rem;
  } 


  ${media.small`
  `};
  ${media.medium`
  `};
  ${media.large`
    background: ${({ theme }) => theme.COLORS.DARK['700']};
    padding: 6.4rem;
    
    width: 47.6rem;    

    h3 {
      display: flex;
      font-size: 3.2rem;
      font-family: ${({ theme }) => theme.FONTS.TEXT};
      font-weight: 500;
    }

    border-radius: 1.6rem;

  `};
  ${media.exlarge`
  `}; 
`

export const ButtoSigIn = styled(Button)`
  margin-top: 3.2rem;
`

export const ButtoTextSigIn = styled(ButtonText)`
  margin-top: 3.2rem;
`