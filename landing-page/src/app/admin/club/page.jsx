'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import AdminClubCard from "../components/AdminClubCard";

export default function AdminClub() {
    const [clubList, setClubList] = useState(null)
    
    const handleFetch = async () => {

        try {
            const response = await axios.get('/api/db/home')
            setClubList(response?.data?.data?.data)
            console.log(response?.data?.data?.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleFetch();
    }, []);
    
    return (
        <>
            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="w-full mx-auto">
                    <h2 className="text-center text-5xl font-extrabold text-gray-900">Clubs</h2>
                    <div className="mt-6 grid gap-8">
                        {clubList?.map((club, idx) => (
                            <AdminClubCard key={idx} club={club} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


