'use client'
import Image from "next/image";
import Link from "next/link";

import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Navbar(props) {
    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <>
            <div className="flex w-full justify-center">

                <nav className="glass md:w-3/4 w-[90%] md:px-8 px-2 md:py-1 fixed z-20 top-5 ">

                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2">

                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image src={"/logo/sac-alt.jpg"} height={44} width={44} alt="sac logo" className="rounded-xl drop-shadow-md md:block hidden" />
                            <Image src={"/logo/sac-alt.jpg"} height={33} width={33} alt="sac logo" className="rounded-xl drop-shadow-md block md:hidden" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SAC</span>
                        </a>

                        <div className="flex md:order-2 px-3 md:px-3 md:space-x-0 rtl:space-x-reverse">
                            <a id="join-button" href="https://forms.gle/aafoMXUutj5ynJzB7" target="_blank" className="text-white bg-accent hover:bg-opacity-80 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm sm:px-4 sm:py-2 px-3 py-1.5 text-center transition duration-300">
                                <span>Join</span>
                            </a>


                        </div>

                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
                                <li>
                                    {props.page === 'event' ? (
                                        <span className="cursor-pointer text-secondary px-3">
                                            <Link href={"/"}>
                                                Home
                                            </Link>
                                        </span>
                                    ) : (
                                        <>
                                            <span onClick={() => handleClickScroll('club')} className="cursor-pointer text-secondary px-3">Clubs</span>
                                            <span onClick={() => handleClickScroll('incharge')} className="cursor-pointer text-secondary px-3">Incharge</span>
                                            <span onClick={() => handleClickScroll('gallery')} className="cursor-pointer text-secondary px-3">Gallery</span>
                                            <span className="cursor-pointer text-secondary px-3">
                                                <Link href={"/events"}>
                                                    Events
                                                </Link>
                                            </span>
                                        </>
                                    )
                                    }

                                </li>
                            </ul>
                        </div>

                        <div className="items-center justify-between block w-full md:hidden" id="navbar-sticky">
                            <ul className="flex flex-col p-2 mt-0 font-medium rounded-lg rtl:space-x-reverse ">
                                <li>
                                    {props.page === 'event' ? (
                                        <span className="cursor-pointer text-secondary px-3">
                                            <Link href={"/"}>
                                                Home
                                            </Link>
                                        </span>
                                    ) : (
                                        <>
                                            <span onClick={() => handleClickScroll('club')} className="cursor-pointer text-secondary px-3">Clubs</span>
                                            <span onClick={() => handleClickScroll('incharge')} className="cursor-pointer text-secondary px-3">Incharge</span>
                                            <span onClick={() => handleClickScroll('gallery')} className="cursor-pointer text-secondary px-3">Gallery</span>
                                            <span className="cursor-pointer text-secondary px-3">
                                                <Link href={"/events"}>
                                                    Events
                                                </Link>
                                            </span>
                                        </>
                                    )
                                    }

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                
            </div >


        </>
    )
}