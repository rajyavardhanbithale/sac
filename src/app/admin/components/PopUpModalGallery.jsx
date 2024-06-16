import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoTrashBin } from "react-icons/io5";

export default function PopUpModalGallery(props) {


    useEffect(() => {
        if (props?.isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [props?.isOpen]);

    const [formData, setFormData] = useState({ title: '', image_id: '' });
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            timestamp: Math.floor(Date.now()/1000),
            visible: true,
            ...formData
        }
        try {
            const response = await axios.post('/api/db/gallery/update?method=create', {
                body
             })
            if (response.status === 200) {
                setSuccess('Image successfully added to gallery!');
                setFormData({ title: '', image_id: '' });
                props?.fetch()
                
                props?.closeModal()
            } else {
                setSuccess('Failed to add image to gallery.');
            }
        } catch (error) {
            setSuccess('An error occurred. Please try again.');
        }



    };

    return (
        <>
            {(props?.isOpen) && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto h-[100vh]">
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={props?.closeModal}
                    ></div>

                    <div className={`bg-white p-8 rounded-md w-1/2 z-10 transition-transform h-auto overflow-y-auto duration-300 ease-in-out transform scale-100 ${props.isOpen ? 'animate-jump-in' : 'animate-jump-out'}`}>
                        <h2 className="text-xl font-semibold mb-4">Add Image To Gallery</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="title" className="block font-semibold">
                                    Title (optional)
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="border border-gray-300 bg-gray-200 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-500"
                                    value={formData.title}
                                    onChange={handleChange}

                                />
                            </div>

                            <div className="overflow-hidden">
                                <label htmlFor="image_id" className="block font-semibold">Poster</label>
                                <div className="flex flex-col gap-1">
                                    <span>
                                        1. Upload image to google drive
                                    </span>
                                    <span>
                                        2. Make image public for everyone on google drive (share =&gt; general access =&gt; anyone with the link)
                                    </span>
                                    <span>
                                        3. Copy url and extract id and paste below
                                    </span>
                                    <span className="w-full overflow-hidden break-words">
                                        4. Example : https://drive.google.com/file/d/<strong>11wbQi2g6IcdYjMxE5aNRpNuvhvTgd1rX</strong>/view?usp=sharing
                                    </span>
                                    <span className="w-full overflow-hidden break-words">
                                        4.1. ID = <strong>11wbQi2g6IcdYjMxE5aNRpNuvhvTgd1rX</strong>
                                    </span>
                                    <span>
                                        Note - for better performance use .webp format and image file size should not exceed more than 800 KB
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    id="image_id"
                                    name="image_id"
                                    className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-500"
                                    value={formData.image_id}
                                    onChange={handleChange}
                                    required />
                            </div>

                            <div>
                                <span className="text-green-500"> {success} </span>
                            </div>

                            <div className="flex w-full justify-center">
                                <button type="submit" className="items-center bg-gray-500 w-[30%] hover:bg-gray-600 duration-1000 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-gray-600">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
