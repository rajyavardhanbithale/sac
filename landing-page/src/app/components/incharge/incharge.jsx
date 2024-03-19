'use client'
import Image from "next/image";
import Title from "../Title";
import { incharge_list } from "./incharg_list"
import Marquee from "react-marquee-slider";

export default function Incharge() {

    return (
        <>
            <Title title={"Incharges"} />
            <section className="text-gray-600 body-font">
                <div className="w-[95%] px-4 py-24 mx-auto">
                    <div className="-mx-4 -mb-10 text-center">
                        <Marquee velocity={50}>
                            {incharge_list.map((item, idx) => (
                                <div key={idx} className=" mb-10 px-4">
                                    <div className="rounded-lg h-32 overflow-hidden">
                                        <Image
                                            src={item?.photo}
                                            width={0}
                                            height={0}
                                            sizes="100vw" 
                                            alt="content"
                                            className="object-cover object-center h-full w-full"
                                        />
                                    </div>

                                    <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-2">{item?.name}</h2>
                                    <p className="leading-relaxed text-base">{item?.club}</p>
                                    <p className="leading-relaxed text-base text-gray-700">{item?.role}</p>

                                </div>
                            ))}
                        </Marquee>

                    </div>
                </div>
            </section>
        </>
    )
}