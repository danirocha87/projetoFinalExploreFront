import styled from "styled-components";
import media from "../../styles/media";

export const Container = styled.div`
 .swiper {
  padding: 32px;
 }

 .swiper-slide {
  display: flex;
  justify-content: center;
 }

 .swiper-pagination-bullet-active {   
  display: none;
 }

 .swiper-pagination-bullet {  
  display: none;
 }

 .swiper-button-prev {  
  display: none;
 }

 .swiper-button-next {  
  display: none;
 }

 ${media.medium`
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.COLORS.LIGHT['200']};    
    display: inline-block;
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.COLORS.LIGHT['100']};    
    display: inline-block;
  }

  .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.LIGHT['300']};    
    display: initial;
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.LIGHT['300']};    
    display: initial;
  }

 `};
`