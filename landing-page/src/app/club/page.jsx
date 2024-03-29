import Collapse from "../components/Collapse"


export default function ClubsPage() {

    
    return (
        <>
            <div className="flex w-full">
                <div className="lg:w-[15%] w-[25%] h-screen bg-primary">
                    <div className="lg:p-5 p-6">
                        <img src="logo/sac_logo.svg" alt="logo" className="rounded-full drop-shadow-xl" />
                    </div>
                    <div className="flex justify-center p-2">
                        <span className="text-secondary drop-shadow-xl text-xl text-center font-semibold leading-8 tracking-wider">Software Development Club</span>
                    </div>

                    <div className="mt-10">
                        <Collapse title="mission"> 
                            <span>Contnet</span>
                        </Collapse>
                    </div>


                </div>
                <div className="lg:w-[85%] w-[75%">

                </div>
            </div>


        </>
    )
}