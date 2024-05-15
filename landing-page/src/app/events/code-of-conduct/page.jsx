import Navbar from "@/app/components/Navbar";


export default function COC() {
    return (
        <>
            {/* <Navbar /> */}

            <div class="mt-20 flex flex-col justify-center items-center">
                <div class="w-3/4">
                    <div class="mx-auto flex flex-col  text-2xl text-center">

                        <span class="mx-auto text-6xl font-bold  uppercase">
                            Student Activity Center
                        </span>

                        <img src="/assets/sac_logo.png" alt="sac logo" className="mx-auto my-5 w-[10%]" />

                        <div className="flex flex-col gap-5 mt-5">

                            <span class="mx-auto text-5xl font-bold drop-shadow-md uppercase">
                                Code of Conduct
                            </span>
                            <span>
                                The Student Activity Centre is committed to creating an
                                inclusive and welcoming environment for all participants
                                at our events. We expect everyone in attendance to adhere
                                to the following code of conduct.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-[70%] mt-10 flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-semibold">Respectful Behavior</span>
                        <span className="text-xl">Treat all participants with respect,
                            courtesy, and consideration. Refrain from demeaning,
                            discriminatory, or harassing behavior or language related
                            to race, ethnicity, religion, gender, gender
                            identity/expression, sexual orientation, disability,
                            physical appearance, or other personal characteristics.
                            Be respectful of differing viewpoints and experiences.
                        </span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-semibold">Professionalism</span>
                        <span className="text-xl">
                            Maintain a professional demeanor throughout the event.
                            Dress appropriately for the event setting.
                            Avoid disruptive behavior that could interfere with others&apos; ability to participate.
                        </span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-semibold">Safety and Security</span>
                        <span className="text-xl">
                            Follow all instructions from event staff and venue personnel.
                            Do not engage in any behavior that could compromise the safety or security of others.
                            Report any safety concerns, inappropriate behavior, or code of
                            conduct violations to event staff immediately.
                        </span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-semibold">Responsible Conduct</span>
                        <span className="text-xl">
                            Refrain from excessive alcohol consumption or the use of illegal substances.
                            Do not engage in destructive, unethical, or illegal activities.
                            Respect the venue facilities and property.
                        </span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-3xl font-semibold">Accountability</span>
                        <span className="text-xl">
                            Participants who violate this code of conduct may be asked to leave the event, and further disciplinary action may be taken.
                            The Student Activity Centre reserves the right to address any instances of unacceptable behavior not explicitly covered by this code of conduct.
                            By attending this event, you agree to comply with this code of conduct. Let&apos;s work together to ensure a positive and inclusive experience for everyone.
                        </span>
                    </div>


                </div>

                <div class="w-3/4  my-20 ">
                    <div class="mx-auto flex flex-col  text-2xl text-center">

                        <span>
                        By attending this event, you agree to comply with this code of conduct. Let&apos;s work together to ensure a positive and inclusive experience for everyone.
                        </span>
                    </div>

                </div>
            </div>


        </>
    )
}






