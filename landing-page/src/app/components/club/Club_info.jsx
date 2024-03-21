

import Typewriter from 'typewriter-effect';

export default function ClubInfo(props) {
    return (
        <>
            <section className="animate-fade-up text-gray-600 body-font">
                <div className="lg:container mx-auto flex px-5 md:py-12 lg:py-0  md:flex-col lg:flex-row flex-col items-center">
                    
                    <div className="lg:max-w-lg lg:w-full md:w-[40%] w-5/6 mb-10 md:mb-0">
                        <img className="hover:scale-105 transition duration-1000 object-cover object-center rounded" alt="hero" src={props?.image} />
                        <h1 className="block lg:hidden title-font md:mx-auto text-center lg:mx-0  sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                           
                            <Typewriter
                                options={{
                                    strings: props?.title,
                                    autoStart: true,

                                    delay: 75
                                }}
                            />
                        </h1>
                    </div>

                    <div className="lg:flex-grow md:mt-6 lg:mt-0 lg:w-1/2  lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center justify-center">
                        <h1 className="hidden lg:block title-font md:mx-auto  lg:mx-0  sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            {/* {props?.title} */}
                            <Typewriter
                                options={{
                                    strings: props?.title,
                                    autoStart: true,

                                    delay: 75
                                }}
                            />
                        </h1>



                        <p className="text-lg mt-2 text-gray-800 w-full font-semibold">Our Mission</p>
                        <p className="mb-4 leading-relaxed">
                            {props?.mission}
                        </p>

                        <p className="text-lg mt-2 text-gray-800 w-full font-semibold">Our Vision</p>
                        <p className="mb-4 leading-relaxed">
                            {props?.vision}
                        </p>


                        {/* <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p> */}

                        {/* <button classNameName="mt-4 bg-accent px-4 py-1 text-secondary rounded-2xl">
                            <IoMdArrowRoundBack classNameName="inline-flex mr-2"></IoMdArrowRoundBack>
                            Back
                        </button> */}

                    </div>
                </div>
                   
            </section>
        </>
    )
}