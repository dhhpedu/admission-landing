"use client";

import CountUp from "react-countup";

const Statistics: React.FC = () => {
    return (
        <div className="flex gap-4 md:gap-10 2xl:gap-40 justify-center py-4 md:py-8 rounded md:rounded-lg bg-cover" style={{
            backgroundImage: 'url(	https://w.ladicdn.com/s1550x650/5c7362c6c417ab07e5196b05/20-20240130173313-k02ok.png)'
        }}>
            <div className="h-48 w-48 bg-white rounded-full flex items-center justify-center flex-col p-4 text-center">
                <div className="text-blue-500 text-lg md:text-2xl 2xl:text-4xl mb-2 font-bold">
                    <CountUp startVal={0} end={37500} />
                </div>
                <div className="text-sm">Sinh viên đã và đang theo học</div>
            </div>
            <div className="h-48 w-48 bg-white rounded-full flex items-center justify-center flex-col p-4 text-center">
                <div className="text-blue-500 text-lg md:text-2xl 2xl:text-4xl mb-2 font-bold">36</div>
                <div className="text-sm">Ngành đào tạo hệ đại học chính quy</div>
            </div>
            <div className="h-48 w-48 bg-white rounded-full flex items-center justify-center flex-col p-4 text-center">
                <div className="text-blue-500 text-lg md:text-2xl 2xl:text-4xl mb-2 font-bold">100%</div>
                <div className="text-sm">Sinh viên được kết nối việc làm</div>
            </div>
        </div>
    )
}

export default Statistics;