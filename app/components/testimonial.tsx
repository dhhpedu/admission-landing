"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Heading1 } from "."
import { TestimonialData } from "../data/testimonial"
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial: React.FC = () => {
    return (

        <div style={{
            backgroundImage: 'url(https://w.ladicdn.com/s1440x887/5c7362c6c417ab07e5196b05/887-d-20240130184218-oo0be.png)'
        }} className="py-4 md:py-10 2xl:py-40 bg-cover w-full no-repeat bg-right flex flex-col justify-center">
            <Heading1 center title="NHẬN XÉT CỦA CÁC DOANH NGHIỆP VỀ CHẤT LƯỢNG ĐÀO TẠO" />
            <div className="container mx-auto pb-4 md:pb-10 flex justify-center max-w-[1000px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        TestimonialData.map((x, i) => (
                            <SwiperSlide key={i}>
                                <div className="shadow rounded-lg bg-white flex p-4">
                                    <div className="h-80 w-72 bg-slate-100 rounded-lg">
                                        <img src={x.pictute} alt="PICTURE" className='object-cover h-full w-full rounded-xl' />
                                    </div>
                                    <div className="flex-1 px-4 text-center">
                                        <div className='flex justify-center mb-4'>
                                            <img src='https://w.ladicdn.com/s400x400/5c7362c6c417ab07e5196b05/38-20240130182308-ptcht.png' alt='QUOTE' className='w-16' />
                                        </div>
                                        <div className='mb-4 md:text-lg'>
                                            {x.message}
                                        </div>
                                        <div className='font-bold text-blue-800 mb-2'>{x.fullName}</div>
                                        <div className='text-slate-800'>{x.jobTitle}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>


            </div>
        </div>
    )
}

export default Testimonial;