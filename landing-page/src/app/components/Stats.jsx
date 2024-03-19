'use client'
import CountUp from 'react-countup';

export default function Stats() {

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="px-18 py-6 mt-8 mx-auto -ml-4">
                    <div className="flex justify-center flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                <CountUp
                                    end={6}
                                    duration={2}
                                    prefix='' />
                            </h2>
                            <p className="leading-relaxed">Clubs</p>
                        </div>

                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                <CountUp
                                    end={100}
                                    duration={2}
                                    prefix='+' />
                            </h2>
                            <p className="leading-relaxed">Members</p>
                        </div>

                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                            <CountUp
                                    end={20}
                                    duration={2}
                                    prefix='+' />
                            </h2>
                            <p className="leading-relaxed">Incharges</p>
                        </div>

                       
                    </div>
                </div>
            </section>
        </>
    )
}



{/* <section className="text-gray-600 body-font">
    <div className="px-20 py-24 mx-auto">
        <div className="flex justify-center flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    <CountUp end={6}>
                        {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>
                </h2>
                <p className="leading-relaxed">Clubs</p>
            </div>

            <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp end={100}  prefix='+'>
                        {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>
                </h2>
                <p className="leading-relaxed">Members</p>
            </div>

            <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp end={20}  prefix='+'>
                        {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>
                </h2>
                <p className="leading-relaxed">Incharges</p>
            </div>


        </div>
    </div>
</section> */}
