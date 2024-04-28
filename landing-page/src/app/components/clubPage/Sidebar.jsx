'use client'

import Collapse from "../Collapse"
import { IoMdHome } from "react-icons/io";
import { HiOutlineDocumentAdd } from "react-icons/hi";

export default function ClubSidebar(props) {
    return (
        <>
            <div className="lg:p-5 p-6" >
                <img src="/assets/sac_logo.png" alt="logo" className="rounded-full drop-shadow-xl w-3/4 mx-auto" />
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
                    <a href="https://forms.gle/aafoMXUutj5ynJzB7" target="_blank">

                        <span className="p-2 rounded-lg text-white font-bold ">
                            Join Now
                        </span>
                    </a>
                    <a href="https://forms.gle/aafoMXUutj5ynJzB7" target="_black">
                        <span className="p-2 rounded-lg text-white font-bold  my-auto">

                            <HiOutlineDocumentAdd />

                        </span>
                    </a>
                </div>

                <div className="mt-8">
                    <Collapse title="mission">
                        <span>
                            {props?.mission}
                        </span>
                    </Collapse>
                    <Collapse title="vision">
                        <span>
                            {props?.vision}

                        </span>
                    </Collapse>
                    <Collapse title="Incharge">
                        <div className="flex flex-col">
                            {props?.incharge?.map((item, idx) => (
                                <span key={idx}>
                                    {item}
                                </span>

                            ))}


                        </div>
                    </Collapse>
                    {/* <Collapse title="Contact">
                        <div className="flex flex-col">
                            {props?.contact?.map((item, idx) => (
                                <span key={idx}>
                                    {item}
                                </span>

                            ))}
                        </div>
                    </Collapse> */}

                </div>



            </div>
        </>
    )
}