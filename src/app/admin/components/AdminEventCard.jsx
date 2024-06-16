'use client'

import { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { IoTrashBin } from "react-icons/io5";
import PopUpModalEvent from "./PopUpModalEvents";


export default function AdminEventCard({ event }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [popupMethod, setPopupMethod] = useState(null)
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    function handleModal() {
        openModal()
    }
    const epochDate = (epoch) => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const timestamp = epoch * 1000;
        const epochDate = new Date(timestamp)
        const month = epochDate.getMonth()
        const date = epochDate.getDate()
        const year = epochDate.getFullYear()

        const dayIndex = epochDate.getDay()

        return `${dayNames[dayIndex]}, ${date} ${monthNames[month]} ${year}`
    }
    return (
        <>
            <div className="w-[90%]  mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
                <div className="lg:flex lg:flex-col xl:flex-row">
                    <div className="flex justify-center my-auto mx-auto">
                        <img
                            className="h-full object-cover md:w-1/2 lg:w-full"
                            alt="hero"
                            src={`https://lh3.googleusercontent.com/d/${event.imageID}=w1000`}
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="p-8 w-full">
                        <div className="flex flex-col gap-0">
                            <span className="mt-3 text-gray-900 text-xl font-semibold">
                                Title
                            </span>
                            <span className="mt-2 text-gray-700">
                                {event.title}
                            </span>
                            <span className="mt-5 text-gray-900  font-semibold text-xl">
                                Description
                            </span>
                            <div className="flex flex-col gap-2">
                                <div
                                    dangerouslySetInnerHTML={{ __html: event?.description }}
                                    className=""
                                >

                                </div>

                            </div>

                            <span className="mt-3 text-gray-900 text-xl font-semibold">
                                Location
                            </span>
                            <span className="mt-2 text-gray-700">
                                {event.location}
                            </span>

                            <span className="mt-3 text-gray-900 text-xl font-semibold">
                                Date
                            </span>
                            <span className="mt-2 text-gray-700">
                                {epochDate(event.date)}
                            </span>


                            <span className="mt-3 text-gray-900 text-xl font-semibold">
                                Price
                            </span>
                            <span className="mt-2 text-gray-700">
                                {event.price}
                            </span>
                            <span className="mt-3 text-gray-900 text-xl font-semibold">
                                Registration Link
                            </span>
                            <span className="mt-2 text-gray-700">
                                {event.register}
                            </span>

                        </div>

                        <div className="flex md:justify-center lg:justify-end gap-1 mt-8">
                            <button onClick={() => { handleModal(); setPopupMethod('delete') }} className="flex bg-red-600 px-3 py-2 font-semibold text-white rounded-xl">
                                Delete
                                <span className="mt-1 ml-1">
                                    <IoTrashBin />
                                </span>
                            </button>

                            <button onClick={() => { handleModal(); setPopupMethod('update') }} className="flex bg-green-600 px-3 py-2 font-semibold text-white rounded-xl">
                                EDIT
                                <span className="mt-1 ml-1">
                                    <TbEdit />
                                </span>
                            </button>

                        </div>
                        <PopUpModalEvent
                            isOpen={isModalOpen}
                            closeModal={closeModal}
                            data={event}
                            popupMethod={popupMethod}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};



