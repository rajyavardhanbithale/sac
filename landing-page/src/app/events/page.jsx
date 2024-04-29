import Link from "next/link"
import Title from "../components/Title"
import Navbar from "../components/Navbar"
import { IoLocationOutline, IoTicketOutline } from "react-icons/io5"
import { CiCalendar, CiCalendarDate } from "react-icons/ci"
import { GoArrowUpRight } from "react-icons/go"



export default function EventsPage() {

    return (
        <>
            <Navbar></Navbar>

            <div className="mt-32">
                <Title title={"Upcoming Event"}></Title>
            </div>
            <div class="mt-16 w-[90%] mx-auto">
                <div className="flex flex-row justify-center items-center gap-16 ">
                    <div className="w-[50%]">

                        <img src="events/event-sac-inauguration-ceremony.png" alt="" className="rounded-xl hover:scale-105 duration-500" />
                    </div>

                    <div className="w-[50%] flex flex-col gap-2">
                        <span className="text-3xl">Student Activity Centre Inaugration</span>
                        <a href="https://maps.app.goo.gl/p11a3HVywVhJuWmW9" target="_blank">

                        <span className="text-xl">
                            <IoLocationOutline className="inline-flex mr-2" />

                            SSIPMT, Raipur
                        </span>
                        </a>

                        <span className="text-xl">
                            <CiCalendarDate className="inline-flex mr-2" />
                            Wed, May 1
                        </span>

                        <span className="text-xl">
                            <IoTicketOutline className="inline-flex mr-2" />

                            Free
                        </span>

                        <div className="flex flex-col gap-3 text-base">

                            <span>Join us for the grand inauguration of the
                                <span className="font-semibold">
                                    &nbsp;
                                    Student Activity Centre (SAC)
                                </span>
                                - the heart of campus innovation! Presented by the Institute Innovation Council, the SAC is all about personal growth, skill development, and an unforgettable campus experience.

                            </span>

                            <span>
                                Get ready for an interactive keynote by tech pro,
                                <span className="font-semibold">
                                    &nbsp; Pulkit Pagare

                                </span>
                                , as he shares invaluable insights on mastering coding interviews at top MNCs.
                            </span>

                            <span>
                                We've got some tricks up our sleeves to make this event unforgettable! Expect inspiration, new connections,
                                and a
                                <span className="font-semibold">
                                    &nbsp;
                                    secret surprise!
                                </span>
                            </span>

                            <span>
                                <span className="font-semibold">
                                Don't miss out! &nbsp;
                                </span>
                                Come celebrate with us and kickstart your journey at the Student Activity Centre. See you there!
                            </span>

                        </div>

                        <a href="https://konfhub.com/sac-inaugration" target="_blank" rel="noopener noreferrer">

                            <div className="mt-4 ext-xl py-2 px-6 bg-primary text-white w-fit rounded-2xl cursor-pointer hover:scale-105 duration-300">
                                <span>
                                    Register
                                </span>
                                <GoArrowUpRight className="inline-flex ml-3" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}