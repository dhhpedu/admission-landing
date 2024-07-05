"use client"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

const EventComponent: React.FC = () => {

    const [photos, setPhotos] = useState<any[]>([]);
    const swiperRef = useRef<SwiperRef>(null);

    useEffect(() => {
        fetch(`https://dhhp.edu.vn/open-api/photos?apikey=lJQnpvudu92zeOZ&PostId=38932`).then(value => value.json().then(data => {
            setPhotos(data);
        }))
    }, []);

    return (

        <div className="md:flex" id="event">
            <div className="md:w-1/2">
                {
                    photos.length > 0 && (
                        <Swiper className="h-full"
                            ref={swiperRef}
                            autoplay
                            modules={[Autoplay]}
                            loop
                        >
                            {
                                photos.map((photo, index) => (
                                    <SwiperSlide key={photo.id}>
                                        <Image src={photo.url} width={950} height={660} alt="IMG" className="h-full object-cover w-full" />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    )
                }
            </div>
            <div className="md:w-1/2">
                <div className="bg-red-600 h-full text-white p-4 md:p-10 2xl:p-20">
                    <div className="text-xl md:text-2xl xl:text-3xl font-bold mb-1" data-aos="fade-up" data-aos-duration="1000">HOẠT ĐỘNG PHONG TRÀO</div>
                    <div className="text-xl md:text-2xl xl:text-3xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">PHONG PHÚ</div>
                    <div className="mb-2 text-sm md:text-base" data-aos="fade-up" data-aos-duration="1000">
                        Tham gia hoạt động phong trào giúp sinh viên trau dồi kinh nghiệm xã hội, kỹ năng làm việc nhóm và các kỹ năng mềm khác.
                    </div>
                    <div className="mb-4 text-sm md:text-base" data-aos="fade-up" data-aos-duration="1000">
                        Và còn muôn vàn các hoạt động sôi nổi, bắt nhịp xu hướng để các tân sinh viên thỏa sức rèn luyện, vui chơi, giải trí; phát triển toàn diện Đức - Trí - Thể - Mỹ, khai phá sức sáng tạo. Chắc chắc quãng đại học của các bạn sẽ không bao giờ nhàm chán và thiếu đi những kỷ niệm đẹp tại mái trường Đại học Hải Phòng.
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        {
                            photos.map((photo) => (
                                <div className="w-full md:h-40 bg-slate-100 overflow-hidden" key={photo.id}>
                                    <Image src={photo.url} alt="IMG" className="w-full h-full object-cover hover:scale-110 transition-all duration-500" width={250} height={170} />
                                </div>
                            ))
                        }

                    </div>
                    <div className="flex gap-4 text-white pt-4">
                        <button type="button" className="border-2 rounded-full h-10 md:h-14 w-10 md:w-14 hover:bg-white hover:text-orange-500" onClick={() => {
                            swiperRef.current?.swiper.slidePrev();
                        }}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button type="button" className="border-2 rounded-full h-10 w-10 md:h-14 md:w-14 hover:bg-white hover:text-orange-500" onClick={() => {
                            swiperRef.current?.swiper.slideNext();
                        }}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventComponent;