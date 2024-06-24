"use client";

import CountUp from "react-countup";

const Statistics: React.FC = () => {
    return (
        <div className="flex gap-4 md:gap-10 2xl:gap-40 justify-center py-4 md:py-8 rounded md:rounded-lg bg-cover" style={{
            backgroundImage: 'url(	https://w.ladicdn.com/s1550x650/5c7362c6c417ab07e5196b05/20-20240130173313-k02ok.png)'
        }}  data-aos="fade-up" data-aos-duration="1000">
            <div className="h-48 w-48 bg-white rounded-full flex items-center justify-center flex-col p-4 text-center border-8 border-orange-500 shadow-lg">
                <img src="https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/17-20240130172819-yb3cc.png" alt="IMG" className="w-8" />
                <div className="text-blue-500 text-lg md:text-2xl 2xl:text-3xl font-bold">
                    <CountUp startVal={0} end={37500} />
                </div>
                <div className="text-sm">Sinh viên đã và đang theo học</div>
            </div>
            <div className="h-48 w-48 bg-white rounded-full flex items-center justify-center flex-col p-4 text-center border-8 border-orange-500 shadow-lg">
                <img src="https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/16-20240130172819-rnpqk.png" alt="IMG" className="w-10" />
                <div className="text-blue-500 text-lg md:text-2xl 2xl:text-4xl font-bold">36</div>
                <div className="text-sm">Ngành đào tạo hệ đại học chính quy</div>
            </div>
            <div className="h-48 w-48 bg-white rounded-full flex items-center justify-center flex-col p-4 text-center border-8 border-orange-500 shadow-lg">
                <img src="https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/15-20240130172819-txo8f.png" alt="IMG" className="w-10" />
                <div className="text-blue-500 text-lg md:text-2xl 2xl:text-4xl font-bold">100%</div>
                <div className="text-sm">Sinh viên được kết nối việc làm</div>
            </div>
        </div>
    )
}

export default Statistics;