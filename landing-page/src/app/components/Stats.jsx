'use client'
import CountUp from 'react-countup';

export default function Stats() {

    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="px-18 py-6 mt-8 mx-auto -ml-4">
                    <div class="flex justify-center flex-wrap -m-4 text-center">
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                <CountUp
                                    end={6}
                                    duration={2}
                                    prefix='' />
                            </h2>
                            <p class="leading-relaxed">Clubs</p>
                        </div>

                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                <CountUp
                                    end={100}
                                    duration={2}
                                    prefix='+' />
                            </h2>
                            <p class="leading-relaxed">Members</p>
                        </div>

                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                            <CountUp
                                    end={20}
                                    duration={2}
                                    prefix='+' />
                            </h2>
                            <p class="leading-relaxed">Incharges</p>
                        </div>

                       
                    </div>
                </div>
            </section>
        </>
    )
}



{/* <section class="text-gray-600 body-font">
    <div class="px-20 py-24 mx-auto">
        <div class="flex justify-center flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    <CountUp end={6}>
                        {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>
                </h2>
                <p class="leading-relaxed">Clubs</p>
            </div>

            <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp end={100}  prefix='+'>
                        {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>
                </h2>
                <p class="leading-relaxed">Members</p>
            </div>

            <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp end={20}  prefix='+'>
                        {({ countUpRef, start }) => (
                            <ReactVisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </ReactVisibilitySensor>
                        )}
                    </CountUp>
                </h2>
                <p class="leading-relaxed">Incharges</p>
            </div>


        </div>
    </div>
</section> */}
