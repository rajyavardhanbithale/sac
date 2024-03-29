'use client'
import { useEffect, useState } from "react";
import Title from "../components/Title";
import GalleryClub from "../components/clubPage/GalleryClub";
import ClubSidebar from "../components/clubPage/Sidebar";
import { MdOutlineInfo } from "react-icons/md";
import axios from "axios";


export default function ClubsPage() {
    const data = {
        "id": "club_gallery",
        "data": [
            {
                "name": "Software Development Club",
                "info": [
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    }
                ]
            },
            {
                "name": "Robotics Club",
                "info": [
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    }
                ]
            },
            {
                "name": "Technical Club",
                "info": [
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    }
                ]
            },
            {
                "name": "Designing Club",
                "info": [
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    }
                ]
            },
            {
                "name": "Research & Writers Club",
                "info": [
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    }
                ]
            },
            {
                "name": "Third Eye : The Photography Club",
                "info": [
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    },
                    {
                        "timestamp": "1711718834",
                        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
                        "description": "this is a image",
                        "uploader": "user"
                    }
                ]
            }
        ]
    }

    const [dataFac, setDataFac] = useState(null)
    const club = "Software Development Club"

    const info = data.data
        .filter(item => item.name === club)
        .map(item => ({
            name: item.name,
            info: item.info
        }));

    const handleFetchFaculty = async () => {
        try {
            const response = await axios.get("/api/db/incharge")
            if (response.status === 200) {
                const filterFac = response?.data?.data.filter(item => item.club === club)
                // console.log(filterFac);
                setDataFac(filterFac[0])
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleFetchFaculty();
    }, [])



    console.log(dataFac && dataFac);

    return (
        <>
            <div className="flex w-full min-h-screen">
                <div className="lg:w-[18%] w-[25%] max-h-screen overflow-y-auto bg-primary fixed left-0 top-0 h-full">
                    <ClubSidebar></ClubSidebar>
                </div>
                <div className="lg:w-[18%] w-[25%]"></div>
                <div className="lg:w-[82%] w-[75%] p-5 mt-8">
                    <div className="flex justify-center">
                        <span className="text-5xl font-semibold text-center">Software Development Club</span>
                    </div>

                    <div>
                        <GalleryClub data={info}></GalleryClub>

                        <div className="flex justify-center align-middle gap-1 mt-10 text-gray-500 text-xs">
                            <span className="mt-0.5"><MdOutlineInfo /></span>
                            <span>Images related to SDC</span>

                        </div>
                    </div>

                    <div className="p-4 mt-2">
                        <Title title={"About"}></Title>
                        <div className="mt-5 text-center">

                            <span className="lg:text-xl mg:text-base font-medium leading-8 tracking-wide "> The Software Development Club (SDC) is dedicated to keeping its members at the forefront of technology. Through a vibrant environment that fosters creativity and innovation, SDC ensures that developers thrive. By participating in hackathons and technical events, members are encouraged to unleash their problem-solving skills. SDC also aims to boost members' career prospects by providing opportunities for skill development, networking, and career advancement, ultimately increasing their placement rates in the industry.</span>
                        </div>

                        <div className="flex justify-center rounded-2xl mt-10">
                            <iframe width="800" height="400" src="https://www.youtube.com/embed/VkK8XyBbtq8?si=Wrq_aFX1Ge6r-AAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-2xl"></iframe>
                        </div>
                    </div>

                    <div>
                        <Title title={"Faculty"}></Title>
          
                        <section class="text-gray-600 body-font">
                            <div class="flex px-5 py-24 mx-auto gap-3">
                                {dataFac && dataFac?.name?.map((item, idx) => (
                                    <div key={idx} class="flex flex-wrap -m-4 justify-center mx-auto">
                                        <div class="w-[100%] p-4">
                                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={dataFac.image[idx]} alt="blog" />
                                                <div class="p-6">
                                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 capitalize">{dataFac.position[idx]}</h2>
                                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3 capitalize">{item}</h1>
                                                    <p class="leading-relaxed mb-3">{dataFac.contact[idx]}</p>

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