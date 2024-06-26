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
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    autoplaySpeed: 5000,
                    speed: 1000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    autoplaySpeed: 5000,
                    speed: 1000,
                }
            }
        ]
    };


    // const handleFetch = async () =>{
    //     try{
    //         const response = await axios.get('/api/db')
    //         setImages(response?.data?.data?.id)
    //         // // console.log(response?.data?.data?.id);
    //     }catch{
    //         // console.log("error");
    //     }
    // }

    // useEffect(()=>{
    //     handleFetch()
    // },[])
    console.log(props.data);

    return (
        <>

            <div className="mt-16 w-[100%] sm:w-[85%] mx-auto">

                <Slider {...settings}>
                    {/* {props?.data?.info.map((item, idx) => ( */}
                    {props?.data?.map((item, idx) => (
                        <div key={idx}>
                            <img src={item} alt="" className="mx-auto p-2 px-5 md:w-1/2" />
                        </div>
                    ))}
                </Slider>
            </div>

        </>
    )
}

const CustomPrevArrow = ({ onClick }) => (
    <button
        className="z-10 absolute lg:-left-8  sm:-left-7 -left-2  top-1/2 flex items-center justify-center align-middle  text-xl transform -translate-y-1/2 bg-accent hover:brightness-75 transition duration-500 ease-in text-white px-1 py-1 rounded-full"
        onClick={onClick}
        type="button"
        aria-label="preview"
    >
        <IoChevronBackCircleSharp />

    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        className="z-10 absolute sm:-right-8 -right-3 top-1/2 flex items-center justify-center align-middle  text-xl transform -translate-y-1/2 bg-accent hover:brightness-75 transition duration-500 ease-in text-white px-1 py-1 rounded-full"
        onClick={onClick}
        type="button"
        aria-label="next"
    >
        <IoChevronForwardCircleSharp />

    </button>
);
