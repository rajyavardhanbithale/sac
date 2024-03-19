'use client'

import { useEffect, useState } from "react"

export default function LogoPan() {
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const hideLogo = setTimeout(() => {
            setHidden(true)
        }, 1950);


        return () => clearTimeout(hideLogo);
    }, []);
    return (
        <>
            {!hidden &&
                <div className=" absolute inset-0 flex justify-center items-center">
                    <img src="logo/ssipmt.svg" alt="" className="img-anim" />
                    {/* <img src="logo/ssipmt.svg" alt="" className="" /> */}
                </div>
            }

        </>
    )
}