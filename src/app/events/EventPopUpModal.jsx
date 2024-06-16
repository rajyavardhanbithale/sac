'use client'

import { CiCalendarDate } from "react-icons/ci"
import { IoCloseCircleOutline, IoLocationOutline, IoTicketOutline } from "react-icons/io5"
import { useEffect, useState } from 'react';

export default function EventPopUpModal(props) {
    const [close, setClose] = useState(false)

    const data = props?.data
    useEffect(() => {
        if (props?.isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [props?.isOpen]);

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

    const handleClose = () => {
        setClose(true)
        setTimeout(() => {
            props?.closeModal()
            setClose(false)
        }, 500)

    }
    console.log(props.type);
    return (
        <>


            {props?.isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={props?.closeModal}
                    ></div>

                    <div className={`w-11/12 overflow-y-auto xl:h-[70vh] h-[90vh] bg-white xl:p-8 rounded-xl z-10 transition-transform duration-300 ease-in-out transform scale-100 ${close ? 'animate-jump-out' : 'animate-jump-in'}`}>
                        <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-16 mb-8 ">
                            <div className="w-11/12 md:h-[60vh] overflow-hidden my-16 sm:my-0">
                                <img
                                    src={`https://lh3.googleusercontent.com/d/${data.imageID}=w1000`}
                                    alt=""
                                    className="object-contain w-full h-full  rounded-xl hover:scale-105 transition-transform duration-500"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="w-11/12 flex flex-col gap-4">
                                <span className="text-3xl font-bold text-gray-800">{data.title}</span>

                                <span className="text-xl text-gray-600">
                                    <IoLocationOutline className="inline-flex mr-2" />
                                    {data.location}
                                </span>

                                <span className="text-xl text-gray-600">
                                    <CiCalendarDate className="inline-flex mr-2" />
                                    {epochDate(data.date)}
                                </span>

                                <span className="text-xl text-gray-600 capitalize">
                                    <IoTicketOutline className="inline-flex mr-2" />
                                    {data.price}
                                </span>

                                <div className="flex flex-col gap-3 text-base text-gray-700">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: data.description }}
                                        className="text-lg"
                                    />
                                </div>

                                <a
                                    href={data?.register} target="_blank"
                                    className={`${props?.type === 'past' ? "cursor-not-allowed" : "cursor-pointer hover:brightness-105 hover:shadow-xl "} flex w-fit`}>
                                    <span className="flex uppercase bg-primary brightness-90 mt-5 w-fit py-2 px-10 text-white font-semibold rounded-2xl shadow-lg text-lg transition duration-300 transform hover:scale-105">
                                        Register
                                    </span>
                                </a>
                            </div>
                        </div>


                        <div
                            onClick={handleClose}
                            className="absolute text-2xl z-50 top-5 right-5 text-slate-700 cursor-pointer hover:scale-125">
                            <IoCloseCircleOutline></IoCloseCircleOutline>
                        </div>
                    </div>


                </div>


            )}

        </>
    )
}