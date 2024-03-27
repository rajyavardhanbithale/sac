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
            <div className="w-[90%]   mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
                <div className="lg:flex">
                    <div className="flex justify-center my-auto mx-auto">
                        <img className="h-full object-cover md:w-1/2 lg:w-full" alt="hero" src={`/${club?.logo}`} />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-2xl text-gray-900 font-semibold">{club.name}</div>
                        <div className="">
                            <p className="mt-3 text-gray-800 text-lg font-semibold">Mission</p>
                            <p className="mt-2 text-gray-500">{club.mission}</p>
                            <p className="mt-5 text-gray-800 text-lg font-semibold">Vision</p>
                            <p className="mt-2 text-gray-500">{club.vision}</p>
                            <p className="mt-5 text-gray-800 text-lg font-semibold">Details</p>
                        </div>
                        <div className="mt-4 ">
                            <table className="divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr className="border">
                                        <td className="border px-6 py-1 whitespace-nowrap text-center">
                                            <p className="mt-3 text-gray-800 text-lg font-semibold ">Incharge</p>
                                            
                                            {club?.incharge?.map((name, idx) => (
                                                <p key={idx} className="text-gray-500">{name}</p>
                                            ))}
                                        </td>
                                        <td className="border px-6 py-1 whitespace-nowrap text-center">
                                            <p className="mt-3 text-gray-800 text-lg font-semibold">Position</p>
                                            {club?.position?.map((name, idx) => (
                                                <p key={idx} className="text-gray-500">{name}</p>
                                            ))}
                                        </td>
                                        <td className="border px-6 py-1 whitespace-nowrap text-center">
                                            <p className="mt-3 text-gray-800 text-lg font-semibold ">Contact</p>
                                            {club.contact.map((contact, idx) => (
                                                <p key={idx} className="text-gray-500">{contact}</p>
                                            ))}
                                        </td>
                                        <td className="border px-6 py-1 whitespace-nowrap text-center">
                                            <p className="mt-3 text-gray-800 text-lg font-semibold ">Contact</p>
                                            {club.incharge_photo.map((image, idx) => (
                                                <p key={idx} className="text-gray-500">{image}</p>
                                            ))}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex md:justify-center lg:justify-end gap-1 mt-8">
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



