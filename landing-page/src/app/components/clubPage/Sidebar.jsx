'use client'

import Collapse from "../Collapse"
import { IoMdHome } from "react-icons/io";
import { HiOutlineDocumentAdd } from "react-icons/hi";

export default function ClubSidebar() {
    return (
        <>
            <div className="lg:p-5 p-6" >
                <img src="logo/sac_logo.svg" alt="logo" className="rounded-full drop-shadow-xl w-3/4 mx-auto" />
            </div>
            <div className="flex justify-center p-3">
                <span className="text-secondary drop-shadow-xl text-xl text-center font-semibold leading-8 tracking-wider">Software Development Club</span>
            </div>

            <div className="mt-5">
                <div className="mt-2 px-2 flex w-full justify-between align-middle">
                    <span className="p-2 rounded-lg text-white font-bold ">
                        Home
                    </span>
                    <span className="p-2 rounded-lg text-white font-bold  my-auto">

                        <IoMdHome></IoMdHome>
                    </span>

                </div>
                <div className="mt-0 px-2 flex w-full justify-between align-middle">
                    <span className="p-2 rounded-lg text-white font-bold ">
                        Join Now
                    </span>
                    <span className="p-2 rounded-lg text-white font-bold  my-auto">

                        <HiOutlineDocumentAdd />

                    </span>

                </div>

                <div className="mt-8">
                    <Collapse title="mission">
                        <span>
                            To foster a passion for robotics and automation, we offer a platform for students to design and construct robots, cultivating a culture of curiosity and problem-solving through hands-on robotics solutions.
                        </span>
                    </Collapse>
                    <Collapse title="vision">
                        <span>
                            A dynamic community of passionate robotics enthusiasts constantly striving to innovate and push the limits of what's possible with robotics technology and committed to applying their expertise to solve complex problems and make significant contributions to the advancement of automation.
                        </span>
                    </Collapse>
                    <Collapse title="Incharge">
                        <div className="flex flex-col">

                            <span>
                                Mr. Name
                            </span>
                            <span>
                                Mr. designer
                            </span>
                        </div>
                    </Collapse>
                    <Collapse title="Contact">
                        <div className="flex flex-col">
                            <span>
                                +91 232563256
                            </span>
                            <span>
                                +91 652365985
                            </span>
                        </div>
                    </Collapse>
                </div>

                <div className="flex justify-center w-full absolute bottom-5">
                    <span className="text-white text-center text-xl">
                        © 2024 SAC
                    </span>
                </div>
            </div>
        </>
    )
}