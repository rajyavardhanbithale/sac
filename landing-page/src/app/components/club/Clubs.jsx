'use client'
import { useState } from "react"
import ClubInfo from "./Club_info"
import { list } from "./club_list"



export default function Clubs() {
    const [hover, setHover] = useState(false)
    const [index, setIndex] = useState(0)

    function handleHover(index) {
        console.log(index);
        setIndex(index)
        setHover(true)
    }

    function handleBackFromChildren() {
        setHover(false)
    }

    return (
        <>
            <div className="w-full flex justify-center mt-8">
                <span className="text-3xl bg-primary text-secondary px-3 py-4 rounded-2xl">Our Clubs</span>
            </div>

            <div className={`${hover ? 'p-0' : 'p-12'} w-full flex flex-wrap justify-center gap-6`}>
                {list.map((item, idx) => (
                    <>
                        {hover ? (
                            null
                        ) : (
                            <div key={idx} className="flex flex-col justify-center align-middle text-center" >
                                <img onMouseEnter={() => handleHover(idx)} src={item.logo} alt="" className="z-0 w-56  rounded-full hover:brightness-75 transition duration-500" />
                                <span className="text-center">{item.name}</span>
                            </div>
                        )}

                    </>
                ))}
            </div>

            {hover &&
                <ClubInfo image={list[index]?.logo}
                    title={list[index]?.name}
                    mission={list[index]?.mission}
                    vision={list[index]?.vision}
                ></ClubInfo>
            }

            <div className={`${hover ? 'p-0' : 'p-12'} w-full flex flex-wrap justify-center gap-6`}>
                {list.map((item, idx) => (
                    <>
                        {hover ? (
                            <div key={idx} className="flex flex-col justify-center align-middle text-center" >
                                <img onMouseEnter={() => handleHover(idx)} src={item.logo} alt="" className="z-0 w-56  rounded-full hover:brightness-75 transition duration-500" />
                                <span className="text-center">{item.name}</span>
                            </div>
                        ) : (
                            null
                        )}

                    </>
                ))}
            </div>

        </>
    )
}