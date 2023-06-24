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
    margin-bottom: 4.8rem;
  }

  .head {
    display: flex;
    border-radius: .5rem;

    background: ${({ theme }) => theme.COLORS.GRADIENT['200']};
    color: ${({ theme }) => theme.COLORS.LIGHT['300']};
    width: 80vw;
    height: 12rem;
    
    /* margin: 4.4rem 1.6rem 6.2rem 3.6rem;     */
    margin: 4.4rem auto 4.2rem;

    img {
      display: block;
      position: relative;

      width: 19.1rem;      
      height: 14.9rem;

      opacity: 0.8;

      top: -30px;
      left: -30px;      
    }

    .text {      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: initial;
      
      position: relative;
      right: 2.7rem;
      
      h1 {        
        font-family: ${({ theme }) => theme.FONTS.TEXT};
        font-size: 1.7rem;
        margin-bottom: 8px;
      }

      p {
        font-family: ${({ theme }) => theme.FONTS.TITLE};
        font-size: 1.1rem;
        line-height: 140%;        
      }
    }    
  }

  section {
    /* display: flex;
    flex-direction: column;

    margin-left: 2.4rem;

    h2 {
      font-family: ${({ theme }) => theme.FONTS.TEXT};      
      font-size: 1.8rem;
      line-height: 140%;
      margin: 2.4rem 0;
    }

    .cards {
      width: 90vw;
      display: flex;

      overflow-x: scroll;
      /* overflow: hidden; */
      /* gap: 1.2rem;       */
    /* } */
  }

  ${media.small`
    .head {
      height: 16rem;

      img {
        width: 27rem;
        height: 18.9rem;
      }

      .text {
        h1 {
          font-size: 2rem;
        }

        p {
          font-size: 1rem;
        }
      }      
    }

    /* section {
      margin-left: 4rem;      
    }     */
  `};
  ${media.medium`  
    .head {      
      height: 19rem;

      img {
        width: 31.1rem;
        height: 21.9rem;
      }

      .text {
        h1 {
          font-size: 3rem;
        }

        p {
          font-size: 1.2rem;
        }
      }      
    }

    section {
      margin-left: 6rem;      
    }
  `};
  ${media.large`
    .head {      
      height: 24rem;

      margin: 10rem auto 6.3rem;

      img {
        width: 42.8rem;
        height: 26.9rem;
      }

      .text {
        h1 {
          font-size: 3.5rem;
        }

        p {
          font-size: 1.4rem;
        }
      }
    }

    /* section {
      margin-left: 8rem;

      h2 {
        font-size: 3.2rem;
      }

      .cards {        
        gap: 2.7rem;
      }
    } */
  `};
  ${media.exlarge`  
  .head {
    width: 112rem;
    height: 26rem;

    margin: 16.4rem auto 6.2rem;

      img {
        width: 63.2rem;
        height: 40.6rem;

        top: -14.6rem;
      }

      .text {
        h1 {
          font-size: 4rem;
        }

        p {
          font-size: 1.6rem;
        }
      }
    }

    /* section {
      margin-left: 12.1rem;

      h2 {
        font-size: 3.2rem;
      }
    } */
  `};
`

export const ButtoSigIn = styled(Button)`  
`

export const ButtoTextSigIn = styled(ButtonText)`  
`