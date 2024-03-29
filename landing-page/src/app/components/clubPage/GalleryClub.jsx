'use client'
import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GalleryClub(props) {
    const [images, setImages] = useState([])
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };


    // const handleFetch = async () =>{
    //     try{
    //         const response = await axios.get('/api/db')
    //         setImages(response?.data?.data?.id)
    //         // console.log(response?.data?.data?.id);
    //     }catch{
    //         console.log("error");
    //     }
    // }

    // useEffect(()=>{
    //     handleFetch()
    // },[])


    return (
        <>

            <div className="mt-16 w-[85%] mx-auto">

                <Slider {...settings}>
                    {props.data[0].info.map((item, idx) => (
                        <div key={idx}>
                            <img src={item.image} alt="" className="p-2" />
                        </div>
                    ))}
                </Slider>
            </div>

        </>
    )
}

const CustomPrevArrow = ({ onClick }) => (
    <button
        className="z-10 absolute lg:-left-8  -left-7  top-1/2 flex items-center justify-center align-middle  text-xl transform -translate-y-1/2 bg-accent hover:brightness-75 transition duration-500 ease-in text-white px-1 py-1 rounded-full"
        onClick={onClick}
        type="button"
        aria-label="preview"
    >
        <IoChevronBackCircleSharp />

    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        className="z-10 absolute  -right-8 top-1/2 flex items-center justify-center align-middle  text-xl transform -translate-y-1/2 bg-accent hover:brightness-75 transition duration-500 ease-in text-white px-1 py-1 rounded-full"
        onClick={onClick}
        type="button"
        aria-label="next"
    >
        <IoChevronForwardCircleSharp />

    </button>
);
