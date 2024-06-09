'use client'
import Title from "../components/Title"
import Navbar from "../components/Navbar"
import { IoLocationOutline, IoTicketOutline } from "react-icons/io5"
import { CiCalendarDate } from "react-icons/ci"
import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import axios from "axios"
import { unstable_noStore } from "next/cache"

export default function EventsPage() {
    unstable_noStore()
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await axios.get('/api/db/events')

            if (response.status === 200) {
                setEvents(response.data.data)
            }
        }

        fetchAPI()
    }, [])

    const epochDate = (epoch) => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        const timestamp = epoch * 1000
        const epochDate = new Date(timestamp)
        const month = epochDate.getMonth()
        const date = epochDate.getDate()
        const year = epochDate.getFullYear()
        const dayIndex = epochDate.getDay()

        return `${dayNames[dayIndex]}, ${date} ${monthNames[month]} ${year}`
    }

    const isEventPast = (epoch) => {
        const eventDate = new Date(epoch * 1000)
        const today = new Date()
        return eventDate < today
    }

    const upcomingEvents = events.filter(event => !isEventPast(event.date))
    const pastEvents = events.filter(event => isEventPast(event.date))

    return (
        <>
            <Navbar page={"event"}></Navbar>

            <div className="mt-32">
                <Title title={"Events"}></Title>
            </div>

            <div className="mt-16 w-[90%] mx-auto mb-5">
                <div>
                    <h2 className="text-3xl mb-4 font-semibold">Upcoming Events</h2>
                    {upcomingEvents.length > 0 ? (
                        upcomingEvents.map((data, idx) => (
                            <div key={idx} className={`flex ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col justify-center items-center gap-16 my-32`}>
                                <div className="lg:w-[50%] w-[100%]">
                                    <img
                                        src={`https://lh3.googleusercontent.com/d/${data.imageID}=w1000`}
                                        alt=""
                                        className="shadow-xl rounded-xl hover:scale-[1.02] duration-500"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>

                                <div className="lg:w-[50%] w-[95%] flex flex-col gap-2">
                                    <span className="text-3xl">{data.title}</span>

                                    <span className="text-xl">
                                        <IoLocationOutline className="inline-flex mr-2" />
                                        {data.location}
                                    </span>

                                    <span className="text-xl">
                                        <CiCalendarDate className="inline-flex mr-2" />
                                        {epochDate(data.date)}
                                    </span>

                                    <span className="text-xl capitalize">
                                        <IoTicketOutline className="inline-flex mr-2" />
                                        {data.price}
                                    </span>

                                    <div className="flex flex-col gap-3 text-base">
                                        <div
                                            dangerouslySetInnerHTML={{ __html: data.description }}
                                            className="text-xl"
                                        />
                                    </div>

                                    <a href={data?.register} target="_blank">
                                        <button className="flex uppercase bg-primary cursor-pointer cur mt-5 w-fit py-2 px-10 text-white font-semibold rounded-2xl shadow-lg text-xl hover:brightness-105 hover:shadow-xl duration-300 hover:scale-[1.03]">
                                            register
                                        </button>
                                    </a>

                                    <div id="konfhub-widget-container" className="my-10 lg:my-5 flex w-full lg:justify-normal md:justify-center "></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-xl">

                            Big news coming soon! Stay tuned for an exciting event announcement. Get ready to be amazed!
                        </p>
                    )}
                </div>

                <div className="mt-8">
                    <h2 className="text-3xl mb-4 font-semibold">Past Events</h2>
                    {pastEvents.length > 0 ? (
                        pastEvents.map((data, idx) => (
                            <div key={idx} className={`flex ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col justify-center items-center gap-16 my-32`}>
                                <div className="lg:w-[50%] w-[100%]">
                                    <img
                                        src={`https://lh3.googleusercontent.com/d/${data.imageID}=w1000`}
                                        alt=""
                                        className="shadow-xl rounded-xl hover:scale-[1.02] duration-500"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>

                                <div className="lg:w-[50%] w-[95%] flex flex-col gap-2">
                                    <span className="text-3xl">{data.title}</span>

                                    <span className="text-xl">
                                        <IoLocationOutline className="inline-flex mr-2" />
                                        {data.location}
                                    </span>

                                    <span className="text-xl">
                                        <CiCalendarDate className="inline-flex mr-2" />
                                        {epochDate(data.date)}
                                    </span>

                                    <span className="text-xl capitalize">
                                        <IoTicketOutline className="inline-flex mr-2" />
                                        {data.price}
                                    </span>

                                    <div className="flex flex-col gap-3 text-base">
                                        <div
                                            dangerouslySetInnerHTML={{ __html: data.description }}
                                            className="text-xl"
                                        />
                                    </div>

                                    <button className="flex uppercase bg-primary brightness-75 cursor-not-allowed cur mt-5 w-fit py-2 px-10 text-white font-semibold rounded-2xl shadow-lg text-xl hover:brightness-105 hover:shadow-xl duration-300 hover:scale-[1.03]">
                                        register
                                    </button>

                                    <div id="konfhub-widget-container" className="my-10 lg:my-5 flex w-full lg:justify-normal md:justify-center "></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No past events</p>
                    )}
                </div>
            </div>

            <div className="h-20 my-4"></div>
            <div className="flex justify-end w-full lg:fixed lg:bottom-0">
                <div className="w-[100%]">
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}
