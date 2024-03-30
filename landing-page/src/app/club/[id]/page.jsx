'use client'
import { useEffect, useState } from "react";
import Title from "../../components/Title";
import GalleryClub from "../../components/clubPage/GalleryClub";
import ClubSidebar from "../../components/clubPage/Sidebar";
import { MdOutlineInfo } from "react-icons/md";
import axios from "axios";
import { useParams } from "next/navigation";


export default function ClubsPage() {
    const [data, setData] = useState(null)
    const clubGET = useParams()

    function capitalize(paragraph) {
        const words = paragraph.split(" ");
        const capitalizedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        return capitalizedWords.join(" ");
    }
    const club = capitalize(clubGET.id.replaceAll("-", " "))

    const handleFetch = async () => {
        try {
            const response = await axios.get(`/api/db/club?page=${club}`)
            if (response.status === 200) {
                console.log(response.data);
                setData(response.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleFetch();
    }, [])



    // console.log(data && data);

    return (
        <>
            <div className="flex w-full min-h-screen">
                <div className="lg:w-[18%] w-[25%] max-h-screen overflow-y-auto bg-primary fixed left-0 top-0 h-full">
                    <ClubSidebar mission={data?.data?.mission}
                        vision={data?.data?.vision}   
                        incharge={data?.data?.incharge}   
                        contact={data?.data?.contact}   
                    >

                    </ClubSidebar>

                </div>
                <div className="lg:w-[18%] w-[25%]"></div>
                <div className="lg:w-[82%] w-[75%] p-5 mt-8">
                    <div className="flex justify-center">
                        <span className="text-5xl font-semibold text-center">{data?.data?.name}</span>
                    </div>

                    <div>
                        <GalleryClub data={data?.gallery}></GalleryClub>

                        <div className="flex justify-center align-middle gap-1 mt-10 text-gray-500 text-xs">
                            <span className="mt-0.5"><MdOutlineInfo /></span>
                            <span>Images related to SDC</span>

                        </div>
                    </div>

                    <div className="p-4 mt-2">
                        <Title title={"About"}></Title>
                        <div className="mt-5 text-center">

                            <span className="lg:text-xl mg:text-base font-medium leading-8 tracking-wide ">
                            {data?.data?.description}
                            </span>
                        </div>

                        <div className="flex justify-center rounded-2xl mt-10">
                            <iframe width="800" height="400" src="https://www.youtube.com/embed/VkK8XyBbtq8?si=Wrq_aFX1Ge6r-AAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-2xl"></iframe>
                        </div>
                    </div>

                    <div>
                        <Title title={"Faculty"}></Title>

                        <section class="text-gray-600 body-font">
                            <div class="flex px-5 py-24 mx-auto gap-3">
                                {data && data?.name?.map((item, idx) => (
                                    <div key={idx} class="flex flex-wrap -m-4 justify-center mx-auto">
                                        <div class="w-[100%] p-4">
                                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={data.image[idx]} alt="blog" />
                                                <div class="p-6">
                                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 capitalize">{data.position[idx]}</h2>
                                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3 capitalize">{item}</h1>
                                                    <p class="leading-relaxed mb-3">{data.contact[idx]}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </section>
                    </div>


                </div>
            </div>


        </>
    )
}