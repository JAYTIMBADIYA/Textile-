import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide1 from '../../../assets/imresizer-1729682698170.jpg'
import Slide2 from '../../../assets/make-1.png'
import Slide3 from '../../../assets/shrivalli fashion stor.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Navigation, Mousewheel, Keyboard, Autoplay  } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 6000,  // Delay in milliseconds (500ms = 0.5 seconds)
          disableOnInteraction: false,  // Autoplay won't stop when user interacts
        }}
        modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='max-sm:h-3/6' src={Slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Slide3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
