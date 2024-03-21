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
    const [images,setImages] = useState([])
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

    // const images = [
    //     '/assets/image1.jpg',
    //     '/assets/image2.webp',
    //     '/assets/image1.jpg',
    //     '/assets/image2.webp',
    //     '/assets/image1.jpg',
    //     '/assets/image2.webp',
    //     '/assets/image1.jpg',
    //     '/assets/image2.webp',
    // ]

    const handleFetch = async () =>{
        try{
            const response = await axios.get('api/gallery')
            setImages(response?.data?.message)
        }catch{
            console.log("error");
        }
    }

    useEffect(()=>{
        handleFetch()
    },[])

    return (
        <>
            <Title title={"Gallery"} />
            <div className="mt-16 w-[75%] mx-auto">

                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <Image
                                src={`/upload/${image}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={`Slide ${index + 1}`}
                                className="object-cover w-[80%] h-[80%] mx-auto my-auto" 
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
        className="z-10 absolute lg:-right-1 -right-7 top-1/2 flex items-center justify-center align-middle  text-xl transform -translate-y-1/2 bg-accent hover:brightness-75 transition duration-500 ease-in text-white px-1 py-1 rounded-full"
        onClick={onClick}
        type="button" 
        aria-label="next"
    >
        <IoChevronForwardCircleSharp />

    </button>
);
