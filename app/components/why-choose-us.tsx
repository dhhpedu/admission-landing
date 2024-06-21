
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import WhyChooseUsData from '../data/why-choose-us';

const WhyChooseUs : React.FC = () => {
    return (
        <div className='mb-4 md:mb-10'>
        
        <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {
                WhyChooseUsData.map((x, i) => (
                  <SwiperSlide key={i}>
                    <img src={x.image} alt="IMG" width={400} height={400} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
        </div>
    )
}

export default WhyChooseUs