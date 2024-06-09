'use client'

import { IoCalendarOutline, IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
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
        ],
        infinite: events && events.length > 1,
    };

    
    return (
        <>
            {events &&
                    <Slider {...settings}>
                        {events?.map((item, idx) => (
                            <div key={idx} className="md:w-1/2 lg:w-1/3 p-4 animate-fade">
                                <div className="mx-auto xl:w-[80%] flex flex-col justify-center items-center bg-slate-100 rounded-2xl shadow-md transform transition-all duration-500 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
                                    <img
                                        src={`https://lh3.googleusercontent.com/d/${item.imageID}=w1000`}
                                        alt={item.title}
                                        className="w-full xl:w-11/12 rounded-2xl shadow-sm p-2 m-5 object-cover"
                                    />
                                    <div className="flex flex-col gap-2 items-center p-4">
                                        <span className="font-medium text-xl text-gray-800">
                                            {item.title}
                                        </span>
                                        <span className="text-gray-600">
                                            {dateConv(item.date)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </Slider>
            }

            {!events &&
                <div className="flex gap-5 h-[410px]">
                    <div className="w-full p-4">
                        <div className="flex flex-col justify-center h-full items-center bg-slate-100 rounded-xl shadow-lg transform transition-all duration-1000 hover:scale-[1.01] hover:shadow-2xl cursor-pointer">
                            <span className="flex">

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
        className="z-10 absolute lg:-right-8 right-2 top-1/2 flex items-center justify-center align-middle  text-xl transform -translate-y-1/2 bg-accent hover:brightness-75 transition duration-500 ease-in text-white px-1 py-1 rounded-full"
        onClick={onClick}
        type="button"
        aria-label="next"
    >
        <IoChevronForwardCircleSharp />

    </button>
);
