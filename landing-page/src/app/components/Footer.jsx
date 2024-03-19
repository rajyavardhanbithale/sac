export default function Footer() {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src="logo/sac_logo.svg" alt="sac logo" className="w-12" />
                        <span className="ml-3 text-xl">Student Activity Center (SAC)</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Rajyavardhan Bithale —
                        <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@rajyavardhanbithale</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                       +91 963258741
                    </span>
                </div>
            </footer>
        </>
    )
}