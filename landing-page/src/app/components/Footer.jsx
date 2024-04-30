import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <footer className="bg-primary text-white">
                <div className="container mx-auto py-4">
                    <div className="flex flex-col sm:flex-row justify-between align-middle items-center  text-center gap-2">
                        <div className="w-full md:w-1/2">
                            <p className="text-sm">&copy; 2024 Student Activity Center. All Rights Reserved.</p>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col sm:flex-row justify-between align-middle items-center text-center  gap-2">
                            <div className="mr-4">
                                <p className="text-sm">Developed by SAC</p>
                                {/* <p className="text-sm">Developed by [Holder]</p> */}
                            </div>
                            <ul className="flex">
                                <li className="mr-2"><a href="https://twitter.com/SsipmtR" target="_blank" rel="noopener noreferrer" className="text-white"><FaTwitter /></a></li>
                                <li className="mr-2"><a href="https://www.facebook.com/ssipmtrpr/" target="_blank" rel="noopener noreferrer" className="text-white"><FaFacebookF /></a></li>
                                <li className="mr-2"><a href="https://www.instagram.com/sac.ssipmt.raipur/" target="_blank" rel="noopener noreferrer" className="text-white"><FaInstagram /></a></li>
                                <li className="mr-2"><a href="https://www.youtube.com/channel/UCqpDXwqlRWtmvhztJE_VYhg/featured" target="_blank" rel="noopener noreferrer" className="text-white"><FaYoutube /></a></li>
                                <li><a href="https://in.linkedin.com/in/ssipmt-raipur-430a01120" target="_blank" rel="noopener noreferrer" className="text-white"><FaLinkedin /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
