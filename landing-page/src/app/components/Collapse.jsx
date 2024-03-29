'use client'

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Collapse(props) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <div className="max-w-md mx-auto ">
                <button
                    onClick={toggleExpanded}
                    className="text-white capitalize font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    {expanded ? (
                        <>
                            <div className="flex justify-end">

                                <IoIosArrowUp />
                            </div>


                        </>
                    ) : (
                        <>
                            <div className="flex justify-end">
                                <span>
                                    {props.title}
                                </span>
                                <IoIosArrowDown />
                            </div>
                        </>
                    )}
                </button>
                <div
                    className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-96' : 'max-h-0'
                        }`}
                >
                    <div className="bg-gray-200 p-4">
                        {props.children}
                    </div>
                </div>
            </div>

        </>
    )
}