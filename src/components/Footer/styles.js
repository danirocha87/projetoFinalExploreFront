import styled from "styled-components"
import media from "../../styles/media"

export const Container = styled.footer`
  /* grid-area: header; */
  width: 100%;
  padding: 2.9rem 2.8rem;

  background: ${({ theme }) => theme.COLORS.DARK['700']};
  color: ${({ theme }) => theme.COLORS.LIGHT['700']};
  
  display: flex;  
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    
    h1 {
      font-size: 2rem;
    }

    gap: 1.0rem;

    img {
      width: 2.4rem;      
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT['200']};
    font-size: 1.2rem;
  }

  ${media.small`
  `};
  ${media.medium`    
  `};
  ${media.large`
    .logo {    
      
      h1 {
        font-size: 2.4rem;
      }     

      img {
        width: 3rem;
      }      
    }  
    
    span {
      font-size: 1.4rem;
    }
  `};
  ${media.exlarge`
  `};
`