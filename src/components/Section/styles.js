import styled from "styled-components"
import media from "../../styles/media"

export const Container = styled.div`  
  width: 100%;
  max-width: 80vw;

  > h2 {
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.LIGHT['300']};
    
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 140%;
    margin: 2.4rem 0;
  }

  ${media.medium`
  `};

  ${media.large`
    max-width: 112rem;

    > h2 {    
      font-size: 3.2rem;
      line-height: 140%;    
    }
  `};

`