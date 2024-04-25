'use client'

import axios from "axios";
import { useState } from "react";
import { IoTrashBin } from "react-icons/io5";

export default function AdminGalleryPreview(props) {
    const [hoveredIdx, setHoveredIdx] = useState(null);
    

    const handleMouseEnter = (idx) => {
        setHoveredIdx(idx);
    };

    const handleMouseLeave = () => {
        setHoveredIdx(null);
    };

    const handleDeleteImage = async (idx) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT}/gallery/remove`, {
                "isID": true,
                "image_url": idx
            })

            window.location.reload();
        } catch (error) {   
            // console.log("error");
        }   
    };

    
    return (
        <>
            <div className="flex flex-wrap gap-4 justify-center">
                {props?.response?.map((id, idx) => (
                    <div
                        key={idx}
                        className="w-[25%] h-[10%] relative hover:brightness-50 duration-1000 my-auto"
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={`https://lh3.googleusercontent.com/d/${id}=w1000?authuser=1/view`}
                            className="object-cover w-full h-full rounded-lg shadow-lg"
                            alt=""
                        />
                        {hoveredIdx === idx && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    onClick={() => handleDeleteImage(id)}
                                    className="flex text-white font-semibold px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition duration-300"
                                >
                                    Delete
                                    <span>

                                        <IoTrashBin className="mt-1 ml-1" />
                                    </span>
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}