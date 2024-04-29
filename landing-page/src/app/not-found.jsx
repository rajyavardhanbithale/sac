import Link from "next/link"


export default function FourZeroFour() {

    return (
        <>
            <div class="min-h-screen flex flex-col justify-center items-center ">
                <img src="/assets/sac_logo.png" alt="Logo" class="object-cover w-40 h-40 mb-8 rounded-full" />
                <h1 class="text-4xl font-bold mb-4">404</h1>
                <p class="text-lg mb-8 px-4 md:px-0">Not Found</p>
                <div class="flex justify-center items-center space-x-4">
                    <Link href={"/"}>
                        <div class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md duration-500">Back to Home</div>
                    </Link>
                </div>
            </div>
        </>
    )
}