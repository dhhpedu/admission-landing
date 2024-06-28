"use client"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const EventComponent: React.FC = () => {

    const [photos, setPhotos] = useState<any[]>([]);
    const [photo, setPhoto] = useState<string>('');

    useEffect(() => {
        fetch(`https://dhhp.edu.vn/open-api/photos?apikey=lJQnpvudu92zeOZ&PostId=38932`).then(value => value.json().then(data => {
            setPhotos(data);
            setPhoto(data[0].url);
        }))
    }, []);

    return (

        <div className="md:flex" id="event">
            <div className="md:w-1/2">
                <img src={photo} alt="IMG" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2">
                <div className="bg-red-600 h-full text-white p-4 md:p-10 2xl:p-20">
                    <div className="text-2xl md:text-3xl font-bold mb-1" data-aos="fade-up" data-aos-duration="1000">HOẠT ĐỘNG PHONG TRÀO</div>
                    <div className="text-2xl md:text-3xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">PHONG PHÚ</div>
                    <div className="mb-2">
                        Tham gia hoạt động phong trào giúp sinh viên trau dồi kinh nghiệm xã hội, kỹ năng làm việc nhóm và các kỹ năng mềm khác.
                    </div>
                    <div className="mb-4">
                        Và còn muôn vàn các hoạt động sôi nổi, bắt nhịp xu hướng để các tân sinh viên thỏa sức rèn luyện, vui chơi, giải trí; phát triển toàn diện Đức - Trí - Thể - Mỹ, khai phá sức sáng tạo. Chắc chắc quãng đại học của các bạn sẽ không bao giờ nhàm chán và thiếu đi những kỷ niệm đẹp tại mái trường Đại học Đại Nam.
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        {
                            photos.map((photo) => (
                                <div className="w-full md:h-40 bg-slate-100" key={photo.id}>
                                    <img src={photo.url} alt="IMG" />
                                </div>
                            ))
                        }

                    </div>
                    <div className="flex gap-4 text-white pt-4">
                        <button type="button" className="border-2 rounded-full h-14 w-14 hover:bg-white hover:text-orange-500">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button type="button" className="border-2 rounded-full h-14 w-14 hover:bg-white hover:text-orange-500">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventComponent;