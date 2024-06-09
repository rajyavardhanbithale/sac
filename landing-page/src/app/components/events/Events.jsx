'use client';

import { useEffect, useState } from "react";
import Showcase from "./Showcase";
import Link from "next/link";
import axios from "axios";

export default function Events() {
    const [activeTab, setActiveTab] = useState(0);

    const [pastEvents, setPastEvents] = useState();
    const [upcomingEvents, setUpcomingUpEvents] = useState();


    useEffect(() => {
        const handleFetch = async () => {
            try {
                const response = await axios.get('/api/db/events')
                const events = response?.data?.data
                setUpcomingUpEvents(events && events.filter(event => !isEventPast(event.date)))
                setPastEvents(events && events.filter(event => isEventPast(event.date)))
            } catch (error) {
                console.log(error);
            }
        }
        handleFetch()

    }, [])

    const eventTab = ['Upcoming', 'Past'];

    const isEventPast = (epoch) => {
        const eventDate = new Date(epoch * 1000);
        const today = new Date();
        return eventDate < today;
    };


    return (
        <div className="mt-10 mb-24 xl:grid xl:grid-cols-4 w-11/12 mx-auto">
            <div className="xl:col-span-1 flex flex-col w-11/12 mx-auto items-center text-center mb-5 gap-5 h-full align-middle justify-center">
                <span className="text-4xl font-semibold">
                    Events
                </span>
                <span className="mt-2 text-xl text-gray-600">
                    Stay updated with our latest events. Browse through upcoming and past events to never miss out!
                </span>
                <div className="my-5 flex justify-evenly p-1 bg-slate-100 mx-2 rounded-full">
                    {eventTab.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`p-2 w-36 flex justify-center cursor-pointer ${idx === activeTab ? "bg-primary text-white rounded-full animate-fade animate-duration-[1.5s]" : ""}`}>
                            <span className="hover:scale-[1.02] duration-300 hover:border-b-[3px] font-medium border-primary">
                                {item}
                            </span>
                        </div>
                    ))}

                    <Link href={'/events'}>
                        <div
                            onClick={() => setActiveTab(2)}
                            className={`p-2 w-36 flex justify-center cursor-pointer ${activeTab === 2 ? "bg-primary text-white rounded-full animate-fade animate-duration-[1.5s]" : ""}`}>
                            <span className="hover:scale-[1.02] duration-300 hover:border-b-[3px] font-medium border-primary">
                                More
                            </span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="xl:col-span-3 w-11/12 mx-auto">
                {upcomingEvents && activeTab === 0 &&
                    <Showcase events={upcomingEvents} />
                }
                {pastEvents && activeTab === 1 &&
                    <Showcase events={pastEvents} />
                }

            </div>
        </div>
    );
}
