'use client'

import { useEffect, useState } from "react"
import ClubSidebar from "./Sidebar"
import { IoCloseCircle } from "react-icons/io5"

export default function BottomBarClub(props) {
    const [active, setActive] = useState(false)
    const [blur, setBlur] = useState(false)

    useEffect(() => {
        const makeBlur = setTimeout(() => {
            setBlur(true)
        }, 2000)

        return () => clearTimeout(makeBlur)
    }, [active])


    return (
        <>

            {active ? (
                <div className={`flex  w-full rounded-t-2xl ${blur && "glass_apl_bottom"} bottom-slide-in `}>
                    <div className="h-[90vh] bottom-slide-in  overflow-y-auto">
                        <span onClick={() => {setActive(!active); setBlur(false)}} className="absolute right-0 text-white text-2xl m-5">
                            <IoCloseCircle></IoCloseCircle>
                        </span>
                        <ClubSidebar mission={props?.mission}
                            vision={props?.vision}
                            incharge={props?.incharge}
                            contact={props?.contact}
                        />
                    </div>
                </div>
            ) : (
                <div onClick={() => { setActive(!active); setBlur(false) }} className="flex glass_apl w-full h-10 rounded-t-2xl">
                    <div className="bg-primary w-[80%] mx-auto my-auto h-[0.2rem] rounded-3xl"></div>
                </div>
            )}

        </>
    )
}