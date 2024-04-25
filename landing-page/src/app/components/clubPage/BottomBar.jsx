'use client'

import { useEffect, useState } from "react"
import ClubSidebar from "./Sidebar"

export default function BottomBarClub(props) {
    const [active, setActive] = useState(false)
    const [blur, setBlur] = useState(false)

    useEffect(()=>{
        const makeBlur = setTimeout(()=>{
            setBlur(true)
        },2000) 

        return () => clearTimeout(makeBlur)
    },[active])


    return (
        <>
            
            {active ? (
                <div className={`flex  w-full rounded-t-2xl ${blur && "glass_apl_bottom"} bottom-slide-in `}>
                    <div onClick={() => {setActive(!active); setBlur(false)}}  className="h-[90vh] bottom-slide-in  ">
                        <ClubSidebar mission={props?.mission}
                            vision={props?.vision}
                            incharge={props?.incharge}
                            contact={props?.contact}
                        />
                    </div>
                </div>
            ) : (
                <div onClick={() => {setActive(!active); setBlur(false)}} className="flex glass_apl w-full h-10 rounded-t-2xl">
                    <div className="bg-primary w-[80%] mx-auto my-auto h-[0.2rem] rounded-3xl"></div>
                </div>
            )}

        </>
    )
}