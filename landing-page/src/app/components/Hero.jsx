export default function Hero() {
    return (
        <>
            <div className="hero h-[27rem]">
                <img src="assets/hero.jpeg" alt="image" className="-z-50 absolute brightness-[0.2]" />

                <div className="z-50 flex flex-col title h-full py-8 w-full justify-center align-middle text-secondary leading-8 tracking-wide ">
                    <span className="text-6xl  mx-auto font-semibold">
                        Student Activity Center
                    </span>
                </div>

                {/* <div className="relative overflow-hidden">
                    <img src="assets/hero.jpeg" className="hidden md:block brightness-[0.2] md:h-[19rem] lg:h-full" alt="home image" />
                    <img src="assets/hero_mobile.jpg" className="block md:hidden brightness-[0.2] md:h-[19rem] lg:h-full" alt="home image" />

                    <div className="flex flex-col title absolute w-full  lg:top-40 md:top-12 -top-5 text-secondary leading-8 tracking-wide left-1/2" style={{ transform: 'translateX(-50%)' }}>
                        <span className="text-3xl  mx-auto font-semibold">
                            Student Activity Center
                        </span>
                    </div>


                    <div className="flex flex-col absolute w-[40%] py-2.5 mission lg:top-40 md:top-12 top-0 text-secondary leading-8 tracking-wide animate-fade-right">
                        <span className="text-base md:text-2xl lg:text-3xl text-center p-2 m-2">Our Mission</span>
                        <span className="text-xs md:text-base lg:text-xl text-justify md:text-center lg:p-2 lg:m-2">
                            Our goal is to create a vibrant innovation centre, where students from different fields come

                            together to explore new frontiers in technology, entrepreneurship, and creativity
                        </span>
                    </div>




                    <div className="flex flex-col absolute w-[40%] py-2.5 vision lg:top-20 md:top-12 top-0 text-secondary leading-8 tracking-wide animate-fade-left">
                        <span className="text-base md:text-2xl lg:text-3xl text-center p-2 m-2">Our Vision</span>
                        <span className="text-xs md:text-base lg:text-xl text-justify md:text-center lg:p-2 lg:m-2">
                            Our aim is to create a collaborative space in which an innovative idea can be converted into a
                            prototype and eventually a market ready product, all under one roof.
                        </span>
                    </div>
                </div> */}
            </div>

            <div className="flex flex-row">
                <div className="z-50 flex flex-col title h-full py-8 w-full justify-center align-middle text-black leading-8 tracking-wide ">
                    <span className="text-base md:text-2xl lg:text-3xl text-center p-2 m-2">Our Mission</span>
                    <span className="text-xs md:text-base lg:text-xl text-justify md:text-center lg:p-2 lg:m-2">
                        Our goal is to create a vibrant innovation centre, where students from different fields come

                        together to explore new frontiers in technology, entrepreneurship, and creativity
                    </span>
                </div>
                <div>
                    <img src="logo/sac_logo.svg" alt="" />
                </div>
                <div className="z-50 flex flex-col title h-full py-8 w-full justify-center align-middle text-black leading-8 tracking-wide ">
                    <span className="text-base md:text-2xl lg:text-3xl text-center p-2 m-2">Our Vision</span>
                    <span className="text-xs md:text-base lg:text-xl text-justify md:text-center lg:p-2 lg:m-2">
                        Our aim is to create a collaborative space in which an innovative idea can be converted into a
                        prototype and eventually a market ready product, all under one roof.
                    </span>
                </div>
            </div>

        </>
    )
}