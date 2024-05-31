import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoTrashBin } from "react-icons/io5";

export default function PopUpModalEvent(props) {
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [deleteButton, setDeleteButton] = useState(false)

    useEffect(() => {
        if (props?.isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [props?.isOpen]);

    const [formData, setFormData] = useState({
        objectID: props?.data?._id,
        title: props?.data?.title || '',
        description: props?.data?.description || '',
        location: props?.data?.location || '',
        date: props?.data?.date || Date.now() / 1000,
        price: props?.data?.price || '',
        imageID: props?.data?.imageID || '',
    });

    const dateToEpoch = (dateString) => {
        const [year, month, day] = dateString.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        return Math.floor(date.getTime() / 1000);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'date') {
            const epochValue = dateToEpoch(value);
            setFormData((prevData) => ({
                ...prevData,
                [name]: epochValue
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setError("Please fill out all fields.");
            return;
        }

        try {
            const method = props?.method || "update"
            const response = await axios.post(`/api/db/events/update?method=${method}`, formData);
            console.log(response)

            if (response.status === 200) {
                setSuccess("Event Modified Successfully");
                window.location.reload(); // Reload the page after successful modification
            } else {
                setError('Unable to Modify Event');
            }
        } catch (error) {
            setError('Error modifying event. Please try again later.');
        }


    };


    const validateForm = () => {
        return (
            formData.title &&
            formData.description &&
            formData.location &&
            formData.date &&
            formData.price &&
            formData.imageID
        );
    };

    const epochToDate = (epoch) => {
        const date = new Date(epoch * 1000);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleDelete = (e) => {
        const req = "yes, i want to delete";
        if (e.target.value === req) {
            setDeleteButton(true);
        } else {
            setDeleteButton(false);
        }
    };

    const handleDeleteConf = async () => {
        try {
            const response = await axios.post(`/api/db/events/update?method=delete`, formData);
            console.log(response)
            if (response.status === 200) {
                setSuccess("Event Modified Successfully");
                window.location.reload();
            } else {
                setError('Unable to Modify Event');
            }
        } catch (error) {
            setError('Error modifying event. Please try again later.');
        }
    }


    return (
        <>
            {(props?.isOpen && props?.popupMethod === 'update') && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto h-[100vh]">
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={props?.closeModal}
                    ></div>

                    <div className={`bg-white p-8 rounded-md w-1/2 z-10 transition-transform h-[90vh] overflow-y-auto duration-300 ease-in-out transform scale-100 ${props.isOpen ? 'animate-jump-in' : 'animate-jump-out'}`}>
                        <h2 className="text-xl font-semibold mb-4">Event Information Modification</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="title" className="block font-semibold">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="border border-gray-300 bg-gray-200 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-500"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>


                            <div className="flex flex-col gap-1">
                                <span className="font-semibold">
                                    Description
                                </span>
                                <span>
                                    To make the text bold, use &lt;strong&gt;Text&lt;/strong&gt; tag, To break line use &lt;br/&gt;
                                </span>
                                <div>
                                    <label htmlFor="description" className="block font-semibold">Description</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        className="border border-gray-300 rounded-md px-4 py-2 h-16 w-full focus:outline-none focus:border-gray-500"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                            </div>
                            <div>
                                <label htmlFor="location" className="block font-semibold">Location</label>
                                <input type="text" id="location" name="location" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-500" value={formData.location} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="date" className="block font-semibold">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-500"
                                    value={epochToDate(formData.date)}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="price" className="block font-semibold">Price</label>
                                <input type="text" id="price" name="price" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-500" value={formData.price} onChange={handleChange} required />
                            </div>

                            <div>
                                <label htmlFor="imageID" className="block font-semibold">Poster</label>
                                <label htmlFor="imageID" className="flex flex-col gap-1">
                                    <span>
                                        1. Upload image to google drive
                                    </span>
                                    <span>
                                        2. Make image public for everyone on google drive (share =&gt; general access =&gt; anyone with the link)
                                    </span>
                                    <span>
                                        3. Copy url and extract id and paste below
                                    </span>
                                    <span className="w-1/2">
                                        4. Example : https://drive.google.com/file/d/<strong>11wbQi2g6IcdYjMxE5aNRpNuvhvTgd1rX</strong>/view?usp=sharing
                                    </span>
                                    <span>
                                        4.1. ID = <strong>11wbQi2g6IcdYjMxE5aNRpNuvhvTgd1rX</strong>
                                    </span>
                                    <span>
                                        Note - for better performance use .webp formate and image file size should not exceed mode than 800 KB
                                    </span>

                                </label>
                                <input
                                    type="text"
                                    id="imageID"
                                    name="imageID"
                                    className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-500"
                                    value={formData.imageID}
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

            {(props?.isOpen && props?.popupMethod === 'delete') && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto h-[100vh]">
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={props?.closeModal}>

                    </div>

                    <div className={`bg-white p-8 rounded-md w-1/2 z-10 transition-transform  overflow-y-auto duration-300 ease-in-out transform scale-100 ${props.isOpen ? 'animate-jump-in' : 'animate-jump-out'}`}>
                        <h2 className="text-2xl mb-4 font-bold">Event Delete Request</h2>
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold">To delete the requested event type the below sentence</span>
                            <span className="text-red-500 font-medium">yes, i want to delete</span>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="border border-gray-300 bg-gray-200 rounded-md px-4 py-1 w-full focus:outline-none focus:border-gray-500"
                                onChange={e => handleDelete(e)}
                                required
                            />
                        </div>

                        {deleteButton &&
                            <button onClick={handleDeleteConf} className="mt-4 flex bg-red-600 px-3 py-2 font-semibold text-white rounded-xl">
                                Delete
                                <span className="mt-1 ml-1">
                                    <IoTrashBin />
                                </span>
                            </button>
                        }
                    </div>
                </div>
            )}
        </>
    );
};
