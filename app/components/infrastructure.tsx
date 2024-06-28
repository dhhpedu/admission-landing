"use client"
import { Fragment, useEffect, useState } from "react";
import { Heading1 } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Infrastructure: React.FC = () => {

    const [galleries, setGalleries] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://dhhp.edu.vn/open-api/galleries?apikey=lJQnpvudu92zeOZ&language=1&type=1&pageIndex=1&pageSize=10&searchTerm=').then(response => response.json().then(data => {
            setGalleries(data);
        }))
    }, []);

    if (galleries.length === 0) {
        return <Fragment />
    }

    return (
        <div style={{
            backgroundImage: 'url(https://w.ladicdn.com/s1440x879/5c7362c6c417ab07e5196b05/879-d-20240131070338-mgxlv.png)'
        }}>
            <div className="container mx-auto py-4 md:py-10 2xl:py-20 px-2 md:px-0" id="infrastructure">
                <div className="flex justify-between items-center">
                    <Heading1
                        title="Khám phá Đại học Hải Phòng"
                        subTitle="Quần thể nhà trường rộng gần 30ha tọa lạc tại Kiến An - Hải Phòng"
                    />
                    <div className="flex gap-2 md:gap-4">
                        <button type="button" className="h-12 w-12 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transaction duration-500">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button type="button" className="h-12 w-12 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transaction duration-500">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
                <div className="md:flex gap-2 md:gap-4">
                    <div className="md:w-1/2">
                        <div className="flex gap-2 md:gap-4 text-sm md:text-base">
                            <div className="w-1/2 mb-2">
                                <div className="w-full h-52 md:h-64 bg-center rounded relative">
                                    <img src={galleries[0].thumbnail} alt="IMG" className="h-full w-full object-cover rounded-t-lg" />
                                    <div className="h-32 absolute bottom-0 left-0 right-0 p-4 bg-cover bg-center text-white flex items-end rounded-b-lg" style={{
                                        backgroundImage: 'url(https://w.ladicdn.com/s600x600/5c7362c6c417ab07e5196b05/49-20240131065024-fdars.png)'
                                    }}>{galleries[0].title}</div>
                                </div>
                            </div>
                            <div className="w-1/2 mb-2">
                                <div className="w-full  h-52 md:h-64 bg-center rounded relative">
                                    <img src={galleries[1].thumbnail} alt="IMG" className="h-full w-full object-cover rounded-t-lg" />
                                    <div className="h-32 absolute bottom-0 left-0 right-0 p-4 bg-cover bg-center text-white flex items-end rounded-b-lg" style={{
                                        backgroundImage: 'url(https://w.ladicdn.com/s600x600/5c7362c6c417ab07e5196b05/49-20240131065024-fdars.png)'
                                    }}>{galleries[1].title}</div>
                                </div>
                            </div>
                        </div>
                        <div className="h-64 relative mb-2">
                            <img src={galleries[2].thumbnail} alt="IMG" className="h-full w-full object-cover rounded-t-lg" />
                            <div className="h-32 absolute bottom-0 left-0 right-0 p-4 bg-center text-white flex items-end rounded-b-lg" style={{
                                backgroundImage: 'url(https://w.ladicdn.com/s600x600/5c7362c6c417ab07e5196b05/49-20240131065024-fdars.png)'
                            }}>{galleries[2].title}</div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="relative h-full">
                            <img src={galleries[3].thumbnail} alt="IMG" className="h-full w-full object-cover rounded-t-lg" />
                            <div className="h-1/2 text-center bg-no-repeat bg-cover bg-center absolute bottom-0 left-0 right-0 p-4 bg-center text-white flex items-end rounded-b-lg" style={{
                                backgroundImage: 'url(https://w.ladicdn.com/s600x600/5c7362c6c417ab07e5196b05/49-20240131065024-fdars.png)'
                            }}>
                                <div className="max-w-[500px] mx-auto">
                                    {galleries[3].title}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infrastructure;