import styled from "styled-components"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import media from "../../styles/media"

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;  
  justify-content: center;
  flex-direction: column;

  main {
    width: 100%;    
    padding: 1.6rem 5.6rem 3.3rem;
  } 

  section {
    margin-top: 1.6rem;    
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    font-family: ${({ theme }) => theme.COLORS.LIGHT['300']};

    img {
      display: block;
      position: relative;
      width: 26.5rem;
      margin-inline: auto;
      margin-bottom: 1.6rem;

      width: 26.3rem;
      height: 26.3rem;

      border-radius: 50%;
      object-fit: cover; 

      transition: transform 0.3s ease-in-out;
  
      &:hover {
        transform: rotate(45deg);
      }
    }
    
    h1 {
      font-weight: 500;
      font-size: 2.7rem;
      text-align: center;

    }

    h3 {
      margin-top: 2.4rem;
      font-size: 1.6rem;
      line-height: 140%;
      font-weight: 400;
      text-align: justify;      
    }

    .ingredients {
      margin: 2.4rem auto 4.8rem;
      display: flex;
      gap: 2.4rem;
      justify-content: space-around;
      flex-wrap: wrap;      
      
      .tags-ingredients {
        display: flex;
        background-color: ${({ theme }) => theme.COLORS.LIGHT['600']};
        border-radius: .5rem;        
        padding: 0.25rem 0.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
      }
    }

    .buttons {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      

      .amount {        
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.2rem;
        flex-direction: row;
        gap: 1.9rem;

        svg {          
          font-size: 3rem;
        }
      }
    }
  }
  

  ${media.small`
    
  `};
  ${media.medium`  
    
  `};
  ${media.large`
    main {
      width: 100%;      
      padding: 2.4rem 12.1rem 23.1rem;            
    }
  
    section {      
      display: flex;
      gap: 4.7rem;

      img {
        width: 39rem;
        height: 39rem;
        margin: 0;        
      }

      .ingredients {
        margin: 0;
        gap: 1.2rem;
        justify-content: left;

        .tags-ingredients {          
          height: 3rem;
          font-size: 1.2rem;
        }
      }

      .container {
        display: flex;
        flex-direction: column;        
        justify-content: center;
        
        h1 {
          text-align: justify;
          font-size: 40px;
          line-height: 140%;          
        }

        h3 {                    
          font-size: 2.4rem;
          margin-bottom: 2.4rem;
        }

        .buttons {
          margin-top: 4.8rem;
          justify-content: left;
          gap: 3.3rem;
        }
      }
    }
    
  `};
  ${media.exlarge`    
  `};
`

export const ButtonTextViewDish = styled(ButtonText)`  
  font-size: 2.4rem;
  margin-bottom: 1.6rem;
  display: flex;
  justify-content: start;
  
  ${media.large`
    width: auto;    
    justify-content: start;
    font-weight: 700;
    line-height: 140%;
    margin: 2.4rem 0 4.2rem 0;
  `}
`

export const ButtonPageViewDish = styled(Button)`
  width: 100%;

  font-size: 1rem;

  svg {
    font-size: 1.7rem;
  }  

  ${media.large`
    width: auto; 
    font-size: 1.2rem;
    line-height: 2.4rem;
  `}
`