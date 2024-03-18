import { IoMdArrowRoundBack } from "react-icons/io";

export default function ClubInfo(props) {
    return (
        <>
            <section class="animate-fade-up text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={props?.image} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            {props?.title}
                        </h1>

                        <p class="text-lg mt-2 text-gray-800 w-full font-semibold">Our Mission</p>
                        <p class="mb-4 leading-relaxed">
                            {props?.mission}
                        </p>

                        <p class="text-lg mt-2 text-gray-800 w-full font-semibold">Our Vision</p>
                        <p class="mb-4 leading-relaxed">
                            {props?.vision}
                        </p>


                        {/* <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p> */}

                        {/* <button className="mt-4 bg-accent px-4 py-1 text-secondary rounded-2xl">
                            <IoMdArrowRoundBack className="inline-flex mr-2"></IoMdArrowRoundBack>
                            Back
                        </button> */}

                    </div>
                </div>
            </section>
        </>
    )
}