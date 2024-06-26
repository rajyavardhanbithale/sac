'use client'
import { useEffect, useState } from "react"
import ClubInfo from "./Club_info"
import Title from "../Title"
import { PiLightbulbFilament } from "react-icons/pi";
import axios from "axios"


export default function Clubs() {
    const [hover, setHover] = useState(false)
    const [index, setIndex] = useState(0)
    const [clubList, setClubList] = useState(null)
    const [seed, setSeed] = useState(1);
    function handleHover(index) {
        // // console.log(index);
        setIndex(index)
        setHover(true)
        setSeed(Math.random());
    }

    const handleFetch = async () => {
        try {
            const response = await axios.get('/api/db/home')
            setClubList(response?.data?.data?.data)
            // // console.log(response?.data?.data?.data);
        } catch (error) {
            // console.log(error);
        }
    }

    useEffect(() => {
        handleFetch();
    }, []);

    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>

            <div id="club-info-clbi"></div>
            <Title  title={"Our Clubs"} />
            <div className={`${hover ? 'p-0' : 'p-12'} w-full flex flex-wrap justify-center gap-6 mt-8`}>
                {clubList?.map((item, idx) => (
                    <>
                        {!hover &&
                            <div key={idx} className="flex flex-col justify-center align-middle text-center" >
                                <img onMouseEnter={() => handleHover(idx)} src={item.logo} alt="" className="z-0 md:w-56 w-3/4 mx-auto rounded-full hover:brightness-75 transition duration-500" />
                                <span className="text-center mt-4 font-semibold">{item.name}</span>
                            </div>
                        }
                    </>
                ))}
            </div>

            {(hover && clubList) &&
                <>
                    {/* <Stats></Stats> */}
                    
                    <ClubInfo image={clubList[index]?.logo}
                        title={clubList[index]?.name}
                        mission={clubList[index]?.mission}
                        vision={clubList[index]?.vision}
                        incharge={clubList[index]?.incharge}
                        contact={clubList[index]?.contact}
                    // key={seed}
                    ></ClubInfo>
                </>
            }

            <div className={` w-full flex flex-wrap justify-center gap-6`}>
                {clubList?.map((item, idx1) => (
                    <>
                        {hover ? (
                            <div key={idx1}  onClick={()=> handleClickScroll("club-info-clbi")} className="w-[40%] md:w-auto animate-jump-in flex flex-col justify-center align-middle text-center" >
                                <img onMouseEnter={() => handleHover(idx1)} src={item.logo} alt="" className="mx-auto md:w-48 w-36 rounded-full hover:brightness-90 hover:scale-[1.05] transition duration-300 " />
                                <span className="text-center mt-0 font-semibold">{item.name}</span>
                            </div>
                        ) : (
                            null
                        )}

                    </>
                ))}
            </div>



            
            <div className="flex w-full justify-center py-16 ">
                <div className="flex mt-1 mr-2 text-gray-500 text-base">
                    <PiLightbulbFilament></PiLightbulbFilament>
                </div>
                <span className="hidden sm:block text-gray-500 text-base">Hover club logo to know more about club</span>
                <span className="sm:hidden block text-gray-500 text-base">Click club logo to know more about club</span>
            </div>
           

        </>
    )
}