'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import AdminGalleryComponent from "../components/AdminGallery";
import PopUpModalGallery from "../components/PopUpModalGallery";

export default function AdminGallery() {
    const [imageList, setImageList] = useState(null)
    const [isModalOpen, setModalOpen] = useState(false);

    const [auth, setAuth] = useState(null)
    const [password, setPassword] = useState('');

    const [incorrect, setIncorrect] = useState(false)

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


    const handleFetch = async () => {
        try {
            const response = await axios.get('/api/db/gallery')
            setImageList(response?.data?.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const cookieValue = Cookies.get('sh')
        const sha256CHK = process.env.NEXT_PUBLIC_AUTH_ADMIN_MD5

        if (cookieValue === sha256CHK) {
            setAuth(true)
        } else {
            setAuth(false)
        }

        handleFetch();
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


    console.log(imageList);
    return (
        <>
            {auth === true &&


                <div className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full mx-auto">
                        <h2 className="text-center text-5xl font-extrabold text-gray-900">Gallery</h2>
                        <button
                            onClick={openModal}
                            className="flex mx-auto m-5 px-6 py-2 bg-orange-400 text-white font-semibold rounded-2xl">Create</button>


                        <div className="mt-6 flex flex-wrap gap-5">
                            {imageList?.map((item, idx) => (
                                <AdminGalleryComponent item={item} key={idx} handleFetch={handleFetch} />
                            ))}
                        </div>
                    </div>
                    <PopUpModalGallery
                        isOpen={isModalOpen}
                        closeModal={closeModal}
                        fetch={handleFetch}
                    />
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


