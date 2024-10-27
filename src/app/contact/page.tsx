'use client'
import Image from 'next/image';
import picture from '/public/prof.jpeg';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import {Github} from 'lucide-react';
import {Phone} from 'lucide-react';
import Link from 'next/link';

function phone(){
    alert("PhoneNo: 03243495748")
}

export default function Contact() {
    return (
        <main className="m-5 bg-purple-900 text-white relative overflow-hidden">
            <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-2 flex flex-col items-center justify-center">
                <div className=" flex flex-col place-items-center sm:place-items-centersm:my-16 md:my-20 lg:my-24 ">
                    <div className="sm:self-center">
                    <Image
                src={picture}
                alt="profile"
                width={200}
                height={200}
                className="rounded-full mb-4 sm:mb-0 sm:mr-4 md:mr-8 lg:mr-12 transition-transform duration-300 border-4 border-transparent hover:border-white hover:shadow-lg hover:scale-105 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 animate-slow-flip"
              />
                    </div>
                    <div className="flex space-x-7 sm:mt-4 lg:mt-4 md:mt-5 sm:justify-center">
                        <Link href="https://www.linkedin.com/in/faizan-masood-56784023b/" target="_blank" rel="" className="hover:text-gray-300 transition-colors">
                        <Linkedin size={48} className="transition-transform duration-300 hover:rotate-12 hover:scale-110"/>
                        </Link >
                        <Link href="https://www.instagram.com/faizanmasood009/" target="_blank" rel="" className="hover:text-gray-300 transition-colors">
                        <Instagram size={48} className="transition-transform duration-300  hover:rotate-12 hover:scale-110"/>
                        </Link>
                        <Link href="https://github.com/faizanmasood302?tab=repositories" target="_blank" rel="" className="hover:text-gray-300 transition-colors placeholder:">
                        <Github   size={48} className="transition-transform duration-300  hover:rotate-12 hover:scale-110"/>
                        </Link >
                        <button onClick={phone} className="hover:text-gray-300 transition-colors" aria-label="Call Phone Number">
                            <Phone size={48} className="transition-transform duration-300 hover:rotate-12 hover:scale-110" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
