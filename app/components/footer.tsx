const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-500 p-4 md:p-10 2xl:p-20 text-white">
            <div className="container mx-auto">
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <div className="flex flex-col justify-center">
                            <div className="uppercase font-bold text-lg md:text-2xl 2xl:text-3xl mb-4">TRƯỜNG ĐẠI HỌC HẢI PHÒNG</div>
                            <ul>
                                <li>
                                    Địa chỉ: Số 171 Phan Đăng Lưu, Kiến An, Hải Phòng
                                </li>
                                <li>
                                    Hotline: 0398.171.171, 0773.171.171
                                </li>
                                <li>
                                    Email: tuyensinh@dhhp.edu.vn
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2">
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