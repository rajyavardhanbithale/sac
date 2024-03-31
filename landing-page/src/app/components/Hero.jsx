export default function Hero() {
    return (
        <>
            <div className="hero h-[27rem]">
                <img src="assets/hero.webp" alt="image" className="lg:block hidden -z-50" />
                <img src="assets/hero_md.jpg" alt="image" className="md:block hidden lg:hidden -z-50" />
                <img src="assets/hero_mobile.jpg" alt="image" className="block md:hidden  object-top object-scale-down w-full h-full lg:hidden -z-50" />

                <div className="z-50 flex flex-col title h-full py-8 w-full justify-center align-middle text-secondary leading-8 tracking-wide ">
                    <span className="text-6xl  mx-auto font-semibold">
                        {/* Student Activity Center */}
                    </span>
                </div>

            </div>

            <div className="flex flex-col md:flex-row">
                <div className="z-50 flex flex-col title h-full md:py-8 w-full justify-center align-middle text-black leading-8 tracking-wide ">
                    <span className="text-base md:text-2xl lg:text-3xl text-center p-2 m-2">Our Mission</span>
                    <span className="text-xs md:text-base lg:text-xl text-justify md:text-center lg:p-2 lg:m-2">
                        Our goal is to create a vibrant innovation centre, where students from different fields come

                        together to explore new frontiers in technology, entrepreneurship, and creativity
                    </span>
                </div>
                <div>
                    <img src="logo/sac_logo.svg" alt="image" className="md:w-full w-1/2 wlwcrion
                    mx-auto  animate-fade" />
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