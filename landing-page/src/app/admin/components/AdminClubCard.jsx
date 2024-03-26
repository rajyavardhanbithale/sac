'use client'

import { useState } from "react";
import PopUpModal from "./PopUpModal";
import { TbEdit } from "react-icons/tb";
import { IoTrashBin } from "react-icons/io5";


export default function AdminClubCard({ club }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    function handleModal() {
        openModal()
    }
    return (
        <>
            <div className="w-[80%] mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
                <div className="md:flex">
                    <div className="md:flex-shrink-0 my-auto">
                        <img className="h-64 w-full object-cover md:w-64 " alt="hero" src={`/${club?.logo}`} />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-2xl text-gray-900 font-semibold">{club.name}</div>
                        <div>
                            <p className="mt-3 text-gray-800 text-lg font-semibold">Our Mission</p>
                            <p className="mt-2 text-gray-500">{club.mission}</p>
                            <p className="mt-5 text-gray-800 text-lg font-semibold">Our Vision</p>
                            <p className="mt-2 text-gray-500">{club.vision}</p>
                        </div>
                        <div className="mt-4">
                            <p className="mt-3 text-gray-800 text-lg font-semibold">Incharge</p>
                            {club?.incharge?.map((name, idx) => (
                                <p key={idx} className="text-gray-500">{name}</p>
                            ))}
                            <p className="mt-3 text-gray-800 text-lg font-semibold">Position</p>
                            {club?.position?.map((name, idx) => (
                                <p key={idx} className="text-gray-500">{name}</p>
                            ))}
                        </div>
                        <div className="mt-4">
                            <p className="text-lg text-gray-800 font-semibold">Contact</p>
                            {club.contact.map((contact, idx) => (
                                <p key={idx} className="text-gray-500">{contact}</p>
                            ))}
                        </div>

                        <div className="flex justify-end gap-1">
                            <button onClick={handleModal} className="flex bg-red-600 px-3 py-2 font-semibold text-white rounded-xl">
                                Delete
                                <span className="mt-1 ml-1">
                                    <IoTrashBin />
                                </span>
                            </button>

                            <button onClick={handleModal} className="flex bg-green-600 px-3 py-2 font-semibold text-white rounded-xl">
                                EDIT
                                <span className="mt-1 ml-1">
                                    <TbEdit />
                                </span>
                            </button>

                        </div>
                        <PopUpModal isOpen={isModalOpen} closeModal={closeModal} data={club} />
                    </div>
                </div>
            </div>
        </>
    );
};



