import Link from 'next/link';
import { Mail } from 'lucide-react';
function Footer() {
    return (
        <footer className="bg-purple-900 text-white text-base sm:text-lg md:text-xl lg:text-2xl py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 mx-5 sm:m-3 md:m-4 lg:m-5 rounded-b-lg">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <nav className="mb-4 sm:mb-0 w-full sm:w-auto">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 text-center sm:text-left">Quick Links</h1>
                    <ul className="">
                        <li className="flex flex-wrap justify-center sm:justify-startmb-2 sm:mb-0 space-x-5 sm:space-x-4 md:space-x-6 lg:space-x-8">
                            <Link href="#home" className="hover:text-gray-300 transition-colors">
                                Home
                            </Link>
                         
                            <Link href="about-us" className="hover:text-gray-300 transition-colors">
                                About Me
                            </Link>
                        
                        
                            <Link href="contact" className="hover:text-gray-300 transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex sm:flex-row items-center space-x-3 ">
                 <Mail className="" />
                 <Link href="mailto:faizanmasood009@gmail.com" className="">
                    : mailme
                 </Link>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
