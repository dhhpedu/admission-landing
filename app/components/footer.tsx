"use client"
import { faEnvelopeOpenText, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer: React.FC = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <footer className="bg-blue-900 p-4 md:p-10 2xl:p-20 text-white">
            <div className="container mx-auto">
                <div className="md:flex">
                    <div className="md:w-2/3">
                        <div className="flex flex-col justify-center">
                            <div className="mb-4 flex gap-4">
                                <img src="https://dhhp.edu.vn/favicon.ico" alt="LOGO" className="w-20" />
                                <div className="flex-1">
                                    <div className="uppercase text-lg md:text-2xl 2xl:text-3xl font-semibold mb-1">TRƯỜNG ĐẠI HỌC</div>
                                    <div className="text-4xl font-semibold">HẢI PHÒNG</div>
                                </div>
                            </div>
                            <ul className="text-lg font-medium mb-4">
                                <li className="mb-1 flex gap-2 items-center">
                                    <FontAwesomeIcon icon={faLocationDot} className='w-5 h-5' />Địa chỉ: Số 171 Phan Đăng Lưu, Kiến An, Hải Phòng
                                </li>
                                <li className="mb-1 flex gap-2 items-center">
                                    <FontAwesomeIcon icon={faPhoneVolume} className='w-5 h-5' />Hotline: 0398.171.171, 0773.171.171
                                </li>
                                <li className="mb-1 flex gap-2 items-center">
                                    <FontAwesomeIcon icon={faEnvelopeOpenText} className='w-5 h-5' />Email: tuyensinh@dhhp.edu.vn
                                </li>
                            </ul>
                            <div className='flex gap-4'>
                                <img src='https://w.ladicdn.com/ladiui/icons/social/facebook.svg' className='w-12' />
                                <img src='https://w.ladicdn.com/ladiui/icons/social/tiktok.svg' className='w-12' />
                                <img src='https://w.ladicdn.com/ladiui/icons/social/youtube.svg' className='w-12' />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <iframe
                            className="w-full h-72"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.4015345609903!2d106.6237750198515!3d20.807216188371886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7735d162afdb%3A0x70df39254ee1c357!2sHaiphong%20University!5e0!3m2!1sen!2s!4v1718955796874!5m2!1sen!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;