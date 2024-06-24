
"use client";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import WhyChooseUsData from '../data/why-choose-us';
import { useRef } from 'react';

const WhyChooseUs: React.FC = () => {
  const swiperRef = useRef<SwiperRef>();
  return (
    <div className='mb-4 md:mb-10' data-aos="fade-up" data-aos-duration="1000">

      <Swiper
        slidesPerView={4}
        effect="coverflow"
        autoplay
        loop
        modules={[Autoplay, EffectCoverflow, Navigation]}
        className="mySwiper"
        centeredSlides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
        mousewheel={{
          thresholdDelta: 70
        }}
        grabCursor
        navigation
      >
        {
          WhyChooseUsData.map((x, i) => (
            <SwiperSlide key={i}>
              <div className='relative border-2 border-white rounded-xl swiper-slide-img'>
                <img src={x.image} alt="IMG" className='object-cover h-[500px] rounded-xl' />
                <div style={{
                  backgroundImage: 'url(https://w.ladicdn.com/s650x450/5c7362c6c417ab07e5196b05/12-20240130170856-r3aua.png)'
                }} className='absolute bottom-0 left-0 right-0 p-3 text-white rounded-b-xl h-32 md:text-lg'>
                  {x.label}
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default WhyChooseUs