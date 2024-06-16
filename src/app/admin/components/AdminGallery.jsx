'use client'

import axios from "axios"
import { IoTrashBin } from "react-icons/io5"

export default function AdminGalleryComponent(props) {
    const item = props?.item

    const handleAPI = async (method, body) => {
        try {
            const response = await axios.post(`/api/db/gallery/update?method=${method}`, {
               body
            })

            if (response.status === 200) {
                props?.handleFetch()
            }
        } catch (error) {
            console.log(error);
        }
    }


    const handleVisibility = (visible, id) => {
        const body = {
            id: id,
            visible: visible
        }
        handleAPI('visible',body)
    }

    const handleDelete = (id) => {
        const body = {
            id: id
        }
        handleAPI('delete',body)
    }


    return (
        <>
            <div
                className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
                <h2 className="text-xl font-semibold mb-4">{item.title}</h2>

                <div className="overflow-hidden rounded mb-4">
                    <img
                        src={`https://lh3.googleusercontent.com/d/${item.image_id}=w1000`}
                        alt="Image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className="flex justify-between mt-5">
                    <button
                        onClick={()=>handleVisibility(!item.visible,item.id)}
                        className={`px-4 py-2 text-white rounded-md  ${item.visible ? "bg-blue-500 hover:bg-blue-600" : "bg-red-500 hover:bg-red-600"}`}>
                        {item.visible ? "Visible" : "Hidden"}
                    </button>

                    <button
                    onClick={()=>handleDelete(item?.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 ">
                        <IoTrashBin className="inline-flex justify-center mb-0.5 mx-2" />
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}