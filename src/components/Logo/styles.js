import styled from "styled-components"
import media from "../../styles/media"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  h1 {
    font-size: 3.7rem;
  }

  gap: 1.0rem;

  img {
    width: 4.3rem;
  }

  ${media.small`
    h1 {
      font-size: 3.7rem;
    }
  `};
  ${media.medium`    
  `};
  ${media.large`    
  `};
  ${media.exlarge`
    h1 {
      font-size: 4.2rem;
    }
  `};
`