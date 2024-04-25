'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminGalleryPreview from '../components/AdminGalleryPreview';

export default function Upload() {
    const [url, setUrl] = useState('');
    const [key, setKey] = useState(null);
    const [id, setId] = useState(null);
    const [error,setError] = useState(null);
    const [auth, setAuth] = useState(true); //False
    const [images, setImages] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT}/gallery/add`, {
                "image_url": url
            });

            if (response.status === 200) {
                setId("Image Added")
                window.location.reload()
            } else {
                // console.log('Failed to add image');
            }
        } catch (error) {
            setError("invalid image url")
        }
    }


    const handleAuth = (e) => {
        e.preventDefault();
        //https://drive.google.com/file/d/1uTlZAVnR_1ISlsBXGGOmbVEjQQ6P9kVw/view
        if (key.length >= 64 && key === 'e59389d9c8173527647450cc7e781d201e8e7122f5d85c017528ea5c2add8bfe') {
            setAuth(true)
        } else {
            setAuth(false)
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/gallery/images`);
                if (response.data && response.data.images) {
                    setImages(response?.data?.images?.id)
                    // // console.log(response?.data?.images?.id);
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchData();
    }, []);



    return (
        <>
            {auth &&
                <div className="m-20 flex flex-col items-center justify-center bg-white">
                    <h1 className="text-3xl font-semibold py-10">Admin Image Upload</h1>
                    <div className="max-w-md w-full p-6 bg-gray-200 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-center">Enter URL</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                <input
                                    type="text"
                                    className="w-full py-2 px-4 focus:outline-none"
                                    placeholder="Enter URL here..."
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 focus:outline-none">Upload</button>
                            </div>
                        </form>

                        {id &&
                            <span className="mt-4 flex w-full justify-center text-green-500 tracking-wider">
                                {id}
                            </span>
                        }
                        {error &&
                            <span className="mt-4 flex w-full justify-center text-red-500 tracking-wider">
                                {error}
                            </span>
                        }

                    </div>


                    <div className="mt-4">
                        {id &&
                            <img src={`https://lh3.googleusercontent.com/d/${id}=w1000?authuser=1/view`} alt="" />
                        }
                    </div>
                </div>
            }
            {!auth &&
                <div className="min-h-screen flex flex-col items-center justify-center bg-white">
                    <div className="max-w-md w-full p-6 bg-gray-200 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Authenticate</h2>
                        <form onSubmit={handleAuth}>
                            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                <input
                                    type="text"
                                    className="w-full py-2 px-4 focus:outline-none"
                                    placeholder="Enter Key"
                                    value={key}
                                    onChange={(e) => setKey(e.target.value)}
                                />
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 focus:outline-none">Pass</button>
                            </div>
                        </form>


                    </div>


                </div>
            }

            {images &&
                <AdminGalleryPreview response={images} ></AdminGalleryPreview>
            }
        </>
    );
}