import { A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';
import { Container } from './styles';


export function Slider({ children, ...rest }) {
  return (
    <Container {...rest}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        // spaceBetween={10}
        // slidesPerView={3}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        // loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 120,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 120
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
      >
        {children}
      </Swiper>
    </Container >
  )
}