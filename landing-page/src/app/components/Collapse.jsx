'use client'

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Collapse(props) {
    const [expanded, setExpanded] = useState(false); //false

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <div className="flex w-full flex-col">
                <button
                    onClick={toggleExpanded}
                    className="text-white capitalize font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    <div className="flex justify-between">
                        <span>{props.title}</span>
                        <span className={`flex my-auto text-xl font-semibold transition-transform duration-700 ${expanded ? 'rotate-360' : 'rotate-360'}`}>
                            {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </span>
                    </div>
                </button>
                <div
                    className={`mt-1 mr-2 ml-2 overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-96' : 'max-h-0'
                        }`}
                >
                    <div className="p-2 rounded-lg text-white">
                        {props.children}
                    </div>
                </div>
            </div>

        </>
    )
}