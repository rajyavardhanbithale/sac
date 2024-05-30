'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import AdminEventCard from "../components/AdminEventCard";

export default function AdminClub() {
    const [eventList, setEventList] = useState(null)
    
    const handleFetch = async () => {

        try {
            const response = await axios.get('/api/db/events')
            setEventList(response?.data?.data)
            // // console.log(response?.data?.data?.data);
        } catch (error) {
            // console.log(error);
        }
    }

    useEffect(() => {
        handleFetch();
    }, []);
    console.log(eventList);
    
    return (
        <>
            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="w-full mx-auto">
                    <h2 className="text-center text-5xl font-extrabold text-gray-900">Clubs</h2>
                    <div className="mt-6 grid gap-8">
                        {eventList?.map((event, idx) => (
                            <AdminEventCard key={idx} event={event} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


