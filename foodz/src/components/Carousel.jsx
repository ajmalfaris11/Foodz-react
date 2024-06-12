// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.css'



// import required modules
import { Autoplay} from 'swiper/modules';
import { slide1, slide2, slide3 } from '../assets';

export default function Carousel() {
  return (
    <>
     <section className="wrapper">
     <Swiper
        spaceBetween={20}
        Slides={true}
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Pause autoplay on mouse enter
          pauseOnMouseLeave: true, // Resume autoplay on mouse leave
        }}
        loop={true} // Enable looping
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
      </Swiper>
     </section>
    </>
  );
}
