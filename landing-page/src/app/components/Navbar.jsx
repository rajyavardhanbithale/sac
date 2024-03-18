import Image from "next/image";
import { IoIosArrowDroprightCircle } from "react-icons/io";


export default function Navbar() {

    return (
        <>


            <nav className="bg-primary fixed w-full z-20 top-0 start-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={"logo/sac_logo.svg"} height={56} width={56} className="rounded-xl drop-shadow-md" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SAC</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-white bg-accent hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-300">
                            <span>Join</span>

                        </button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
                            <li>
                                <a href="#" className="text-secondary ">About</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}