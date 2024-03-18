'use client'
import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from './Title';

export default function Gallery() {
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

    const images = [
        'https://t4.ftcdn.net/jpg/03/80/74/79/360_F_380747975_sS1hCVB0qPqFCWBMZ3qJ5xTqH6rtaDBI.jpg',
        'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg',
        'https://t4.ftcdn.net/jpg/03/80/74/79/360_F_380747975_sS1hCVB0qPqFCWBMZ3qJ5xTqH6rtaDBI.jpg',
        'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg',
        'https://t4.ftcdn.net/jpg/03/80/74/79/360_F_380747975_sS1hCVB0qPqFCWBMZ3qJ5xTqH6rtaDBI.jpg',
        'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg',
        'https://t4.ftcdn.net/jpg/03/80/74/79/360_F_380747975_sS1hCVB0qPqFCWBMZ3qJ5xTqH6rtaDBI.jpg',
        'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg',
        'https://t4.ftcdn.net/jpg/03/80/74/79/360_F_380747975_sS1hCVB0qPqFCWBMZ3qJ5xTqH6rtaDBI.jpg',
        'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg',
    ]

    return (
        <>
            <Title title={"Gallery"} />
            <div className="mt-16 w-[75%] mx-auto">

                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-[80%] h-[80%] mx-auto my-auto" />
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
    >
        <IoChevronBackCircleSharp />

    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        className="z-10 absolute lg:-right-1 -right-7 top-1/2 flex items-center justify-center align-middle  text-xl transform -translate-y-1/2 bg-accent hover:brightness-75 transition duration-500 ease-in text-white px-1 py-1 rounded-full"
        onClick={onClick}
    >
        <IoChevronForwardCircleSharp />

    </button>
);
