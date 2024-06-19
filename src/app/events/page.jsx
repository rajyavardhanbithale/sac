'use client'
import Title from "../components/Title"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import axios from "axios"

import EventCard from "../components/EventCard"
import EventPopUpModal from "./EventPopUpModal"

export default function EventsPage(request) {
    const param = request.searchParams.id

    const [events, setEvents] = useState([])
    const [eventsType, setEventsType] = useState()
    const [data, setData] = useState()
    useEffect(() => {
        const fetchAPI = async () => {
            const response = await axios.get('/api/db/events')
            if (response.status === 200) {
                setEvents(response.data.data)
            }
        }

        const fetchAPIParam = async () => {
            try {
                const response = await axios.get(`/api/db/events?id=${param}`)
                if (response.status === 200) {
                    setData(response.data.data[0])
                    setModalOpen(true)
                    setEventsType(response.data.data[0].date * 1000 < Date.now() ? "past" : "present")
                }
            }catch(error){
                console.log(error);
            }
        }
        if (param) {
            fetchAPIParam()
        }

        fetchAPI()
    }, [])


    const isEventPast = (epoch) => {
    const eventDate = new Date(epoch * 1000)
    const today = new Date()
    const tomorrow = new Date(today.getTime() + 86400 * 1000)
    return eventDate < tomorrow
};

    const upcomingEvents = events.filter(event => !isEventPast(event.date))
    const pastEvents = events.filter(event => isEventPast(event.date))


    const [isModalOpen, setModalOpen] = useState(false)
    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

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
                        <div className="flex flex-wrap gap-10">
                            {upcomingEvents.map((data, idx) => (
                                <div
                                    onClick={() => { setData(data); setModalOpen(true); setEventsType("present") }}
                                    key={idx}
                                    className="cursor-pointer bg-slate-100 w-96 h-auto m-4 rounded-2xl shadow-lg flex flex-col items-center hover:shadow-xl duration-700">
                                    <EventCard
                                        imageID={data.imageID}
                                        title={data?.title}
                                        date={data?.date}

                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-xl">

                            Big news coming soon! Stay tuned for an exciting event announcement. Get ready to be amazed!
                        </p>
                    )}
                </div>

                <div className="mt-8">
                    <h2 className="text-3xl mb-4 font-semibold">Past Events</h2>
                    {pastEvents.length > 0 ? (
                        <div className="flex flex-wrap gap-10">
                            {pastEvents.map((data, idx) => (
                                <div
                                    onClick={() => { setData(data); setModalOpen(true); setEventsType("past") }}
                                    key={idx}
                                    className="cursor-pointer bg-slate-100 w-96 h-auto m-4 rounded-2xl shadow-lg flex flex-col items-center hover:shadow-xl duration-700">
                                    <EventCard
                                        imageID={data.imageID}
                                        title={data?.title}
                                        date={data?.date}

                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No past events</p>
                    )}
                </div>

                {data &&
                    <EventPopUpModal isOpen={isModalOpen} closeModal={closeModal} data={data} type={eventsType} />
                }
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
