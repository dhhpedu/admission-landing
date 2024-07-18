"use client"
import { Menu } from "@/app/data/menu";
import { faAngleRight, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <header className="md:fixed top-0 left-0 right-0 z-20">
            <div className="bg-white">
                <div className="container mx-auto">
                    <div className="flex items-center gap-4 justify-between">
                        <Link href="/">
                            <Image src='https://dhhp.edu.vn/admissions/logo.png' alt="LOGO" className="2xl:w-72 w-64 py-2" width={300} height={70} />
                        </Link>
                        <div className="flex-1 md:flex hidden items-center gap-4 justify-center">
                            {
                                Menu.map((value, index) => (
                                    <div key={index} className="py-1 text-sm font-medium 2xl:text-lg relative">
                                        <a href={value.url} className="hover:border-b-2 border-blue-500 py-1">{value.label}</a>
                                        {
                                            value.children && (
                                                <div className="absolute bg-white top-10 w-52 shadow hover:block hidden">
                                                    <div className="px-4 py-2">Ngành luật</div>
                                                </div>
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <a href="https://dkxt.dhhp.edu.vn" className="hidden md:block 2xl:px-8 px-6 2xl:py-3 py-2 rounded-full text-sm 2xl:text-base bg-blue-600 text-white font-medium hover:bg-blue-700">Tra cứu kết quả</a>
                        <button type="button" className="text-slate-800 h-10 w-10 border mr-2 rounded-lg md:hidden" onClick={() => setOpen(true)}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-slate-800 opacity-50 fixed top-0 left-0 right-0 bottom-0 z-10" hidden={!open}></div>
            <div className="w-64 bg-white z-20 h-full absolute right-0 top-0 bottom-0" hidden={!open}>
                <div className="py-2 px-2 flex justify-between items-center border-b border-dashed">
                    <div className="flex-1">
                        <Image src='https://dhhp.edu.vn/admissions/logo.png' width={200} height={80} className="h-10 w-full" alt="LOGO" />
                    </div>
                    <button type="button" className="p-2 flex items-center justify-center" onClick={() => setOpen(false)}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <div className="p-2">
                    {
                        Menu.map((value, index) => (
                            <div key={index} className="py-1 font-medium 2xl:text-lg text-slate-800">
                                <a href={value.url} className="hover:border-b-2 border-blue-500 py-1 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faAngleRight} className="text-slate-400" />
                                    {value.label}
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </header>
    )
}

export default Header