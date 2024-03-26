'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function PopUpModal(props) {
    const [success,setSuccess] = useState(null)
    useEffect(() => {
        if (props?.isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [props?.isOpen]);

    const [formData, setFormData] = useState({
        clubName: props?.data?.name,
        mission: props?.data?.mission,
        vision: props?.data?.vision,
        incharge: props?.data?.incharge,
        position: props?.data?.position,
        contact: props?.data?.contact,

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedValue = value;
        if (name === 'position' || name === 'member' || name === 'contract') {
            updatedValue = value.split(',');
        }
        setFormData({
            ...formData,
            [name]: updatedValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT}/home/club`, formData);

            if (response.status === 200) {
                setSuccess("Club Modified Successfully")
                window.location.reload()
            } else {
                console.log('Unable to Modify Club');
            }
        } catch (error) {
            console.log(error);
        }

    };




    return (
        <>

            <div>
                {props?.isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div
                            className="absolute inset-0 bg-black opacity-50"
                            onClick={props?.closeModal}
                        ></div>

                        <div className={`bg-white p-8 rounded-md w-1/2 z-10 transition-transform duration-300 ease-in-out transform scale-100 ${props.isOpen ? 'animate-jump-in' : 'animate-jump-out'}`}>

                            <h2 className="text-xl font-semibold mb-4">Club Information Modification</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="clubName" className="block font-semibold">Name</label>
                                    <input type="text" id="clubName" name="clubName" className="border border-gray-300 bg-gray-200 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-500" value={formData.clubName} onChange={handleChange} readOnly />
                                </div>
                                <div>
                                    <label htmlFor="mission" className="block font-semibold">Mission</label>
                                    <textarea id="mission" name="mission" className="border border-gray-300 rounded-md px-4 py-2 h-28 w-full focus:outline-none focus:border-gray-500" value={formData.mission} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label htmlFor="vision" className="block font-semibold">Vision</label>
                                    <textarea id="vision" name="vision" className="border border-gray-300 rounded-md px-4 py-2 h-28 w-full focus:outline-none focus:border-gray-500" value={formData.vision} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label htmlFor="incharge" className="block font-semibold">Incharge</label>
                                    <input type="text" id="incharge" name="incharge" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-500" value={formData.incharge} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label htmlFor="position" className="block font-semibold">Position</label>
                                    <input type="text" id="position" name="position" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-500" value={formData.position} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label htmlFor="contact" className="block font-semibold">Contact</label>
                                    <input type="text" id="contact" name="contact" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-gray-500" value={formData.contact} onChange={handleChange} required />
                                </div>

                                <div>
                                    <span className="text-red-500 animate-pulse"> * There should be no space between commas (Mr. Name,Mr.Name).</span>
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
            </div>
        </>
    );
};