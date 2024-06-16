'use client'

import { IoCalendarOutline, IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";
import EventCard from "../EventCard";

export default function Showcase(props) {
    const events = props?.events.length !== 0 ? props?.events : null

    const dateConv = (epoch) => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const epochDate = new Date(epoch * 1000)
        const month = epochDate.getMonth()
        const date = epochDate.getDate()
        const year = epochDate.getFullYear()
        const dayIndex = epochDate.getDay()
        return `${dayNames[dayIndex]}, ${date} ${monthNames[month]} ${year}`
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        infinite: events && events.length > 1,
    };


    return (
        <>
            {events &&
                <Slider {...settings}>
                    {events?.map((item, idx) => (
                        <div key={idx} className="md:w-1/2 lg:w-1/3 sm:w-1/2 p-4 animate-fade">
                            <Link href={`/events?id=${item.id}`}>
                                <div className="mx-auto cursor-pointer bg-slate-100 sm:w-96 sm:h-80 m-4 rounded-2xl shadow-lg flex flex-col items-center hover:shadow-xl duration-700">
                                    <EventCard
                                        imageID={item.imageID}
                                        title={item?.title}
                                        date={item?.date}
                                    />
                                </div>
                            </Link>
                        </div>

                    ))}
                </Slider>
            }

            {!events &&
                <div className="flex gap-5 h-[390px]">
                    <div className="w-full p-4">
                        <div className="w-full flex p-2 gap-5 text-center flex-col justify-center h-full items-center bg-slate-100 rounded-xl shadow-lg transform transition-all duration-1000 hover:scale-[1.01] hover:shadow-2xl cursor-pointer">
                            <span className="flex justify-center align-middle items-center">

                                <IoCalendarOutline className="text-7xl my-5 text-gray-800" />
                            </span>

                            <span className="font-medium text-xl text-gray-800">
                                No Upcoming Events
                            </span>
                            <span className="text-gray-600">
                                We are working hard to organize new events. Stay tuned!
                            </span>

                        </div>
                    </div>
                </div>
            }
        </>
    )
}

const CustomPrevArrow = ({ onClick }) => (
    <button
        className="z-10 absolute lg:-left-8 sm:left-2 -left-5 top-1/2 flex items-center justify-center align-middle  text-xl transform -translate-y-1/2 bg-accent hover:brightness-75 transition duration-500 ease-in text-white px-1 py-1 rounded-full"
        onClick={onClick}
        type="button"
        aria-label="preview"
    >
        <IoChevronBackCircleSharp />

    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        className="z-10 absolute lg:-right-8 sm:right-2 -right-5 top-1/2 flex items-center justify-center align-middle  text-xl transform -translate-y-1/2 bg-accent hover:brightness-75 transition duration-500 ease-in text-white px-1 py-1 rounded-full"
        onClick={onClick}
        type="button"
        aria-label="next"
    >
        <IoChevronForwardCircleSharp />

    </button>
);
