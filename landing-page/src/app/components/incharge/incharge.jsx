'use client'
import Image from "next/image";
import Title from "../Title";
import { incharge_list } from "./incharg_list"
import Marquee from "react-marquee-slider";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Incharge() {
    const [speed, setSpeed] = useState(50)
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
            console.log(error);
        }
    }

    useEffect(() => {
        handleFetch()
    }, [])


    return (
        <>
            <Title title={"Incharges"} />
            <section className="text-gray-600 body-font">
                <div className="w-[95%] px-4 py-12 mx-auto">
                    {data &&
                        <div onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(40)} className="-mx-4 -mb-10 text-center">
                            <Marquee velocity={speed}>
                                {data?.map((item, idx) => (
                                    <div key={idx} className="mb-10 flex">
                                        {/* <div className="rounded-lg h-32 overflow-hidden">
                                            <Image
                                                src={item?.photo}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                alt="content"
                                                className="object-cover object-center h-full w-full"
                                                unoptimized
                                            />
                                        </div>

                                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-2">{item?.name}</h2>
                                        <p className="leading-relaxed text-base">{item?.club}</p>
                                        <p className="leading-relaxed text-base text-gray-700">{item?.role}</p> */}

                                        {item.name.map((name, idxItem) => (
                                            <div key={idxItem} className="px-4 ">
                                                <div className="rounded-lg h-32 overflow-hidden">
                                                    <Image
                                                        src={item?.image[idxItem]}
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        alt="content"
                                                        className="object-cover object-center h-full w-full"
                                                        unoptimized
                                                    />
                                                </div>

                                                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-2 capitalize">{name}</h2>
                                                <p className="leading-relaxed text-base capitalize">{item?.club}</p>
                                                <p className="leading-relaxed text-base text-gray-700 capitalize">{item?.position[idxItem]}</p>

                                            </div>

                                        ))}

                                    </div>
                                ))}
                            </Marquee>

                        </div>
                    }
                </div>
            </section>
        </>
    )
}