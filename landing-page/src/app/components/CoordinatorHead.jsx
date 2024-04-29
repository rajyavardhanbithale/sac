import Title from "./Title";

export default function CoordinatorHead() {
    return (
        <>
            <Title title={"SAC Coordinator"}></Title>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-12  mx-auto">
                    <div class="flex flex-wrap -mx-4 -mb-10 text-center justify-center align-middle items-center">
                        <div class="sm:w-1/2 mb-10 px-4">
                            <div class="h-64 lg:h-64 overflow-hidden">
                                <img alt="content" class="rounded-xl object-cover  object-top h-full w-3/4 lg:w-[30%] mx-auto" src="faculty/head-om-prakash-sahu.jpeg" />
                            </div>
                            
                            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Dr. Om Prakash Sahu</h2>
                            <p class="leading-relaxed text-base">Head</p>
                            <p class="leading-relaxed text-base">Student Activity Center</p>
                        </div>
                        <div class="sm:w-1/2 mb-10 px-4">
                            <div class="h-64 lg:h-64 overflow-hidden">
                                <img alt="content" class="rounded-xl object-cover  object-top h-full w-3/4 lg:w-[30%] mx-auto" src="faculty/iec-sheetal-sharma.jpeg " />
                            </div>
                            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Mrs. Sheetal Sharma</h2>
                            <p class="leading-relaxed text-base">Coordinator</p>
                            <p class="leading-relaxed text-base">Student Activity Center</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}