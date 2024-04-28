'use client'
import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from './Title';
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Gallery() {
    // const [images,setImages] = useState([])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
    //         // // console.log(response?.data?.data?.id);
    //     }catch{
    //         // console.log("error");
    //     }
    // }

    const images = [
        '/gallery/img1.png',
        '/gallery/img2.jpg',
        '/gallery/img3.jpg',
    ]

    console.log(images);
    // useEffect(()=>{
    //     handleFetch()
    // },[])

    return (
        <>
            <Title title={"Gallery"} />
            <div className="mt-16  lg:w-[85%] mx-auto">

                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            {/* <Image
                                src={`https://lh3.googleusercontent.com/d/${image}=w1000?authuser=1/view`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={`Slide ${index + 1}`}
                                className="object-cover w-[80%] h-[80%] mx-auto my-auto" 
                                unoptimized
                                /> */}
                            <Image
                                src={image}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={`Slide ${index + 1}`}
                                className="object-cover w-[60%] h-[60%] mx-auto my-auto"
                                unoptimized
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

const CustomPrevArrow = ({ onClick }) => (
    <button
        className="z-10 absolute lg:-left-8  left-2  top-1/2 flex items-center justify-center align-middle  text-xl transform -translate-y-1/2 bg-accent hover:brightness-75 transition duration-500 ease-in text-white px-1 py-1 rounded-full"
        onClick={onClick}
        type="button"
        aria-label="preview"
    >
        <IoChevronBackCircleSharp />

    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        className="z-10 absolute lg:-right-1 right-2 top-1/2 flex items-center justify-center align-middle  text-xl transform -translate-y-1/2 bg-accent hover:brightness-75 transition duration-500 ease-in text-white px-1 py-1 rounded-full"
        onClick={onClick}
        type="button"
        aria-label="next"
    >
        <IoChevronForwardCircleSharp />

    </button>
);
