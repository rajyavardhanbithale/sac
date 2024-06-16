'use client'
import Image from "next/image";
import Title from "../Title";
import { incharge_list } from "./incharg_list"
import Marquee from "react-marquee-slider";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Incharge() {
    const glbSpeed = process.env.NEXT_PUBLIC_MARQUEE_SPEED || 4;
    const [speed, setSpeed] = useState(glbSpeed)
    const [data, setData] = useState(null)


    function handleHover(spd) {
        setSpeed(spd)
    }

    const handleFetch = async () => {
        try {
            const response = await axios.get("/api/db/incharge")
            if (response.status === 200) {
                setData(response?.data?.data)
            }
        } catch (error) {
            // console.log(error);
        }
    }

    useEffect(() => {
        handleFetch()
    }, [])


    // console.log(data);

    return (
        <>
            <Title title={"Club Faculty Incharge"} />
            <section className="text-gray-600 body-font">
                <div className="w-[95%] px-4 py-12 mx-auto">
                    {data &&
                        <div onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(glbSpeed)} className="-mx-4 -mb-10 text-center">
                            <Marquee velocity={speed}>
                                {data?.map((item, idx) => (
                                    <div key={idx} className="mb-10 flex">
                                        
                                        {item.name.map((name, idxItem) => (
                                            <div key={idxItem} className="px-4 ">
                                                <div className="rounded-lg h-40 overflow-hidden">
                                                    <Image
                                                        src={item?.image[idxItem]}
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        alt="content"
                                                        className="object-scale-down object-center h-full w-full"
                                                        unoptimized
                                                    />

                                                    {/* <img src={item?.image[idxItem]} className="object-scale-down object-center h-full w-full" /> */}
                                                   
                                                </div>

                                                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-2 capitalize">{name}</h2>
                                                <p className="leading-relaxed text-base capitalize">{item?.club}</p>
                                                {/* <p className="leading-relaxed text-base text-gray-700 capitalize">{item?.position[idxItem]}</p> */}

                                            </div>

                                        ))}

                                    </div>
                                ))}
                            </Marquee>

                        </div>
                    } 

                    {/* {data &&
                        <img src={data[0]?.image[1]} alt="" />
                    } */}
                </div>
            </section>
        </>
    )
}