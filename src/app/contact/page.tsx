'use client';
import Image from 'next/image';
import picture from '/public/prof.jpeg';
import { Linkedin, Instagram, Github, Phone } from 'lucide-react';
import Link from 'next/link';

function phone() {
    alert("PhoneNo: 03243495748");
}

export default function Contact() {
    return (
        <main className="m-5 bg-purple-900 text-white relative overflow-hidden">
            <section
                id="contact"
                className="py-48 flex flex-col items-center justify-center sm:py-16 md:py-20 lg:py-24 xl:py-28"
            >
                <div className="flex flex-col items-center sm:my-16 md:my-20 lg:my-24">
                    <div className="sm:self-center">
                        <Image
                            src={picture}
                            alt="profile"
                            width={200}
                            height={200}
                            className="rounded-full mb-4 sm:mb-0 sm:mr-4 transition-transform duration-300 border-4 border-transparent hover:border-white hover:shadow-lg hover:scale-105 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 animate-slow-flip"
                        />
                    </div>
                    <div className="flex space-x-7 mt-4 sm:justify-center">
                        <Link href="https://www.linkedin.com/in/faizan-masood-56784023b/" target="_blank" className="hover:text-gray-300 transition-colors">
                            <Linkedin size={48} className="transition-transform duration-300 hover:rotate-12 hover:scale-110" />
                        </Link>
                        <Link href="https://www.instagram.com/faizanmasood009/" target="_blank" className="hover:text-gray-300 transition-colors">
                            <Instagram size={48} className="transition-transform duration-300 hover:rotate-12 hover:scale-110" />
                        </Link>
                        <Link href="https://github.com/faizanmasood302?tab=repositories" target="_blank" className="hover:text-gray-300 transition-colors">
                            <Github size={48} className="transition-transform duration-300 hover:rotate-12 hover:scale-110" />
                        </Link>
                        <button onClick={phone} className="hover:text-gray-300 transition-colors" aria-label="Call Phone Number">
                            <Phone size={48} className="transition-transform duration-300 hover:rotate-12 hover:scale-110" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
