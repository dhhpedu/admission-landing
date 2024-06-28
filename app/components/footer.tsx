"use client"
import { faFacebookF, faInstagram, faLinkedin, faTelegram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';

const Footer: React.FC = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <footer className="bg-blue-800 text-white">
            <div className="container mx-auto">
                <div className="md:flex py-4 md:py-10 gap-4">
                    <div className="md:w-3/4 mb-4">
                        <div className="md:flex gap-4">
                            <div className='md:w-52'>
                                <div className="mb-4 flex gap-4">
                                    <div className="flex-1 flex justify-center">
                                        <Image src='https://dhhp.edu.vn/logo/logo-65.png' alt='LOGO' width={400} height={400} className='w-32 md:w-full' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 md:flex gap-4 px-2 md:px-0'>
                                <div className='md:w-1/2'>
                                    <div className='mb-3 text-xl font-semibold py-2 border-b border-dashed uppercase 2xl:text-2xl'>Thông tin liên hệ</div>
                                    <ul className="font-medium mb-4">
                                        <li className="mb-2 flex gap-3 items-center">
                                            <FontAwesomeIcon icon={faPhoneVolume} />Hotline: 0398.171.171 - 0773.171.171
                                        </li>
                                        <li className="mb-2 flex gap-3 items-center">
                                            <FontAwesomeIcon icon={faEnvelopeOpenText} />Email: tuyensinh@dhhp.edu.vn
                                        </li>
                                        <li className="mb-2 flex gap-3 items-center">
                                            <FontAwesomeIcon icon={faLocationDot} />Địa chỉ: Số 171 Phan Đăng Lưu, Kiến An, Hải Phòng
                                        </li>
                                    </ul>
                                </div>
                                <div className='md:w-1/2'>
                                    <div className='mb-3 text-xl font-semibold py-2 border-b border-dashed uppercase 2xl:text-2xl'>Về Chúng tôi</div>
                                    <div className='flex gap-4'>
                                        <div className='w-1/2'>
                                            <ul className='pl-4 list-disc'>
                                                <li className='mb-2'>
                                                    <a href='https://dhhp.edu.vn/category/details/544'>Thông tin tuyển sinh</a>
                                                </li>
                                                <li className='mb-2'>
                                                    <a href='https://dkxt.dhhp.edu.vn/'>Xét tuyển trực tuyến</a>
                                                </li>
                                                <li className='mb-2'>
                                                    <a href='https://sv.dkxt.dhhp.edu.vn/'>Tra cứu thông tin</a>
                                                </li>
                                                <li className='mb-2'>
                                                    <a href='https://dhhp.edu.vn/category/details/548'>Chuyển đổi số</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='w-1/2'>
                                            <ul className='pl-4 list-disc'>
                                                <li className='mb-2'>
                                                    <a href='https://dhhp.edu.vn/post/su-mang-tam-nhin-va-gia-tri-38887.html'>Sứ mạng - Tầm nhìn</a>
                                                </li>
                                                <li className='mb-2'>
                                                    <a href='https://dhhp.edu.vn/post/ban-giam-hieu-28753.html'>Ban giám hiệu</a>
                                                </li>
                                                <li className='mb-2'>
                                                    <a href='https://dhhp.edu.vn/post/hoi-dong-truong-38818.html'>Hội Đồng Trường</a>
                                                </li>
                                                <li className='mb-2'>
                                                    <a href='https://dhhp.edu.vn/post/dang-bo-38814.html'>Đảng Bộ</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/4 px-2 md:px-0">
                        <iframe
                            className="w-full h-64"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.4015345609903!2d106.6237750198515!3d20.807216188371886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7735d162afdb%3A0x70df39254ee1c357!2sHaiphong%20University!5e0!3m2!1sen!2s!4v1718955796874!5m2!1sen!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className='bg-blue-900'>
                <div className='container mx-auto flex flex-col md:flex-row gap-2 py-2 items-center justify-between'>
                    <div className='md:py-2 py-2 px-2 md:px-0'>
                        © 2024 <a href='https://dhhp.edu.vn/' target='_blank'>Trường Đại Học Hải Phòng</a>
                    </div>
                    <div className='flex gap-4 md:gap-6 items-center'>
                        <a href='https://www.facebook.com/HaiPhongUniversity/' target='_blank'>
                            <FontAwesomeIcon icon={faFacebookF} className='text-lg' />
                        </a>
                        <FontAwesomeIcon icon={faTiktok} className='text-lg' />
                        <a href='https://t.me/haiphonguniversity'>
                            <FontAwesomeIcon icon={faTelegram} className='text-lg' />
                        </a>
                        <FontAwesomeIcon icon={faInstagram} className='text-lg' />
                        <a href='https://www.linkedin.com/company/hai-phong-university/' target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} className='text-lg' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;