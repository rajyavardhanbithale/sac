'use client'
import { useState } from "react"
import ClubInfo from "./Club_info"
import { list } from "./club_list"
import Title from "../Title"
import Stats from "../Stats"
import { PiLightbulbFilament } from "react-icons/pi";


export default function Clubs() {
    const [hover, setHover] = useState(false)
    const [index, setIndex] = useState(0)
    const [seed, setSeed] = useState(1);
    function handleHover(index) {
        // console.log(index);
        setIndex(index)
        setHover(true)
        setSeed(Math.random());
    }


    return (
        <>

            <Title title={"Our Clubs"} />

            <div className={`${hover ? 'p-0' : 'p-12'} w-full flex flex-wrap justify-center gap-6`}>
                {list.map((item, idx) => (
                    <>
                        {hover ? (
                            null
                        ) : (
                            <div key={idx} className="flex flex-col justify-center align-middle text-center" >
                                <img onMouseEnter={() => handleHover(idx)} src={item.logo} alt="" className="z-0 w-56  rounded-full hover:brightness-75 transition duration-500" />
                                <span className="text-center mt-4">{item.name}</span>
                            </div>
                        )}

                    </>
                ))}
            </div>

            {hover &&
                <>
                    <Stats></Stats>
                    <ClubInfo image={list[index]?.logo}
                        title={list[index]?.name}
                        mission={list[index]?.mission}
                        vision={list[index]?.vision}
                    // key={seed}
                    ></ClubInfo>
                </>
            }

            <div className={` w-full flex flex-wrap justify-center gap-6`}>
                {list.map((item, idx) => (
                    <>
                        {hover ? (
                            <div key={idx} className="animate-jump-in flex flex-col justify-center align-middle text-center" >
                                <img onMouseEnter={() => handleHover(idx)} src={item.logo} alt="" className="mx-auto w-32 rounded-full hover:brightness-90 transition duration-500 " />
                                <span className="text-center mt-0">{item.name}</span>
                            </div>
                        ) : (
                            null
                        )}

                    </>
                ))}
            </div>

            {hover &&
                <div className="flex w-full justify-center py-16 ">
                    <div className="flex mt-1 mr-2 text-gray-500 text-base">
                        <PiLightbulbFilament></PiLightbulbFilament>
                    </div>
                    <span className="text-gray-500 text-base">Hover to know more about club</span>
                </div>
            }

        </>
    )
}