'use client'

import Link from "next/link"
import { BsCalendar4Event } from "react-icons/bs";
import Cookies from 'js-cookie';

import { IoImagesOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function Admin() {
    const [auth, setAuth] = useState(null)
    const [password, setPassword] = useState('');

    const [incorrect, setIncorrect] = useState(false)

    useEffect(() => {
        const cookieValue = Cookies.get('sh')
        const sha256CHK = process.env.NEXT_PUBLIC_AUTH_ADMIN_MD5

        if (cookieValue === sha256CHK) {
            setAuth(true)
        } else {
            setAuth(false)
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const chk = process.env.NEXT_PUBLIC_AUTH_ADMIN
        const sha256CHK = process.env.NEXT_PUBLIC_AUTH_ADMIN_MD5
        if (password === chk) {
            setAuth(true)
            Cookies.set('sh', sha256CHK, { expires: 1 / 12 });
        } else {
            setIncorrect(true)
        }
    };

    return (
        <>
            {auth === true &&
                <div className="bg-white flex items-center justify-center min-h-screen">
                    <div className="text-center p-8 bg-slate-100 rounded-lg shadow-lg max-w-4xl mx-auto">
                        <h1 className="text-5xl font-extrabold mb-8 text-gray-800">Admin Dashboard</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Link href="/admin/events">
                                <div className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 border-2 border-transparent hover:border-slate-400">
                                    <h2 className="text-4xl font-bold mb-4 text-gray-800">Events</h2>
                                    <div className="flex justify-center mb-4">
                                        <BsCalendar4Event className="text-6xl text-slate-600" />
                                    </div>
                                    <p className="text-lg text-gray-600">Manage events and activities</p>
                                </div>
                            </Link>
                            <Link href="/admin/gallery">
                                <div className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 border-2 border-transparent hover:border-slate-400">
                                    <h2 className="text-4xl font-bold mb-4 text-gray-800">Gallery</h2>
                                    <div className="flex justify-center mb-4">
                                        <IoImagesOutline className="text-6xl text-slate-600" />
                                    </div>
                                    <p className="text-lg text-gray-600">Manage gallery and images</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            }

            {auth === false &&
                <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                Enter Password
                            </h2>
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="shadow-sm focus:ring-orange-500 py-1 outline-none focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder="Password"
                            />
                            {incorrect &&
                                <span className="mb-5 text-center text-lg font-normal text-red-500">
                                    Incorrect Password
                                </span>
                            }
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 duration-500 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Auth
                                </button>
                            </div>
                        </form>



                    </div>
                </div>
            }
        </>
    )
}