import Title from "../../components/Title";
import GalleryClub from "../../components/clubPage/GalleryClub";
import ClubSidebar from "../../components/clubPage/Sidebar";
import { MdOutlineInfo } from "react-icons/md";
import axios from "axios";
import BottomBarClub from "@/app/components/clubPage/BottomBar";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";


export default async function ClubsPage(request) {
    // const [data, setData] = useState(null)
    // const clubGET = useParams()
    const clubGET = request?.params

    function capitalize(paragraph) {
        const words = paragraph.split(" ");
        const capitalizedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        return capitalizedWords.join(" ");
    }
    const club = capitalize(clubGET.id.replaceAll("-", " "))

    let data;

    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_ENDPOINT_PRIVATE + `/api/db/club?page=${club}`)
        if (response.status === 200) {
            // // console.log(response.data);
            data = response.data
        }
    } catch (error) {
        // console.log(error);
    }

    // console.log(data && data.data);

    const images = [
        '/gallery/img1.png',
        '/gallery/img2.jpg',
        '/gallery/img3.jpg',
    ]

    return (
        <>
            <Navbar></Navbar>

            <div className="mt-16 flex w-full min-h-screen">
                <div className="block sm:hidden fixed bottom-0 w-full z-50">
                    <BottomBarClub mission={data?.data?.mission}
                        vision={data?.data?.vision}
                        incharge={data?.data?.incharge}
                        contact={data?.data?.contact}
                    />
                </div>


                <div className="hidden sm:block lg:w-[18%] w-[25%] max-h-screen overflow-y-auto bg-primary fixed left-0 top-0 h-full">
                    <ClubSidebar mission={data?.data?.mission}
                        vision={data?.data?.vision}
                        incharge={data?.data?.incharge}
                        contact={data?.data?.contact}
                    >

                    </ClubSidebar>

                </div>
                <div className="hidden sm:block lg:w-[18%] w-[25%]"></div>
                <div className="lg:w-[82%] sm:w-[75%] w-[95%] p-5 mt-8 mx-auto">
                    <div className="flex justify-center">
                        <span className="text-5xl font-semibold text-center">{data?.data?.name}</span>
                    </div>

                    <div>
                        <GalleryClub data={images}></GalleryClub>

                        <div className="flex justify-center align-middle gap-1 mt-10 text-gray-500 text-xs">
                            <span className="mt-0.5"><MdOutlineInfo /></span>
                            <span>Images related to Club</span>

                        </div>
                    </div>

                    <div className="p-4 sm:p-2 mt-2">
                        <Title title={"About"}></Title>
                        <div className="flex lg:flex-row flex-col mt-5 text-justify">
                            <div>
                                <div className="w-full justify-center rounded-2xl mt-5 py-5">
                                    {/* <iframe className="hidden sm:block rounded-2xl" width="800" height="400" src="https://www.youtube.com/embed/VkK8XyBbtq8?si=Wrq_aFX1Ge6r-AAA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe> */}
                                    {/* <iframe className="block sm:hidden rounded-2xl" width="400" height="200" src="https://www.youtube.com/embed/VkK8XyBbtq8?si=Wrq_aFX1Ge6r-AAA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe> */}
                                    <img src={`/${data?.data?.logo}`} alt={data?.data?.name} className="md:w-[35%] lg:w-[60%] mx-auto shadow-2xl rounded-2xl" />

                                </div>
                            </div>

                            <div className="md:w-[100%] lg:w-[60%] my-auto">
                                <span className="hidden sm:block lg:text-xl md:text-base font-medium leading-8 tracking-wide ">
                                    {data?.data?.description}
                                </span>
                                <span className="block sm:hidden lg:text-xl md:text-base font-medium leading-8 tracking-wide ">
                                    {data?.data?.description?.split(".")[data?.data?.description?.split(".").length / 2 + 0.5]}
                                </span>
                            </div>

                        </div>

                    </div>

                    <div>
                        <Title title={"Faculty"}></Title>

                        <section className="text-gray-600 body-font">
                            <div className="flex flex-wrap px-5 py-24 mx-auto md:gap-16 gap-5">
                                {data && data?.data?.incharge?.map((item, idx) => (
                                    <div key={idx} className="flex -m-4 justify-center mx-auto">
                                        <div className="w-[100%] p-4">
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-52 md:h-48 w-full object-cover object-top" src={data.data.incharge_photo[idx]} alt="blog" />
                                                <div className="p-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 capitalize">{data.data.position[idx]}</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 capitalize">{item}</h1>
                                                    {/* <p className="leading-relaxed mb-3">{data.data.contact[idx]}</p> */}

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




            <div className="flex justify-end">
                <div className="lg:w-[82%] sm:w-[75%] w-[100%]">

                    <Footer></Footer>
                </div>
            </div>







        </>
    )
}