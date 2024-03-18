import { incharge_list } from "./incharg_list"


export default function Incharge() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                        {incharge_list.map((item, idx) => (
                            <div class="w-[15%] mb-10 px-4">
                                <div class="rounded-lg h-32 overflow-hidden">
                                    <img alt="content" class="object-cover object-center h-full w-full" src={item?.photo} />
                                </div>

                                <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{item?.name}</h2>
                                <p class="leading-relaxed text-base">{item?.club}</p>
                                <p class="leading-relaxed text-base text-gray-700">{item?.role}</p>

                            </div>
                        ))}


                    </div>
                </div>
            </section>
        </>
    )
}