export default function Hero() {
    return (
        <>
            <div>

                <div class="relative overflow-hidden">
                    <img src="https://www.ssipmt.com/images/inner-banner.jpg" className="brightness-[0.2]" />
                    <div class="flex flex-col absolute w-[40%] py-2.5 left-5 top-5 text-secondary leading-8 tracking-wide animate-fade-right">
                        <span className="text-3xl text-center p-2 m-2">Our Mission</span>
                        <span className="text-xl text-center p-2 m-2">
                            Our goal is to create a vibrant innovation centre, where students from different fields come

                            together to explore new frontiers in technology, entrepreneurship, and creativity
                        </span>
                    </div>

                    <div class="flex flex-col absolute w-[40%] py-2.5 right-5 top-5 text-secondary leading-8 tracking-wide animate-fade-left">
                        <span className="text-3xl text-center p-2 m-2">Our Vision</span>
                        <span className="text-xl text-center p-2 m-2">
                            Our aim is to create a collaborative space in which an innovative idea can be converted into a
                            prototype and eventually a market ready product, all under one roof.
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}