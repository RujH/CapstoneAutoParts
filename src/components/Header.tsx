"use client";

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { GrClose } from "react-icons/gr";
import styles from '../styles/header.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

export default function Header() {
    const [nav, setNav] = useState(false);
    
    return (
        <section>
            <header className={styles.header1}>
                <div>
                    <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-3 sm:gap-6 flex-wrap">
                        <div className="flex items-center shrink-0 sm:mr-2">
                            <PhoneIcon className="w-6 h-6 text-green-368 mr-2" />
                            <p className="text-sm sm:text-base text-gray-800">(619) 359-0333</p>
                        </div>
                        <div className="flex items-center shrink-0 sm:mr-2">
                            <EnvelopeIcon className="w-6 h-6 text-green-368 mr-2" />
                            <p className="text-sm sm:text-base text-gray-800">Sales@capstoneautoparts.com</p>
                        </div>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=935+Bailey+Ct,+San+Marcos,+CA+92069"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded shrink-0"
                        >
                            <MapPinIcon className="w-6 h-6 text-green-368 mr-2" />
                            <p className="text-sm sm:text-base text-gray-800">935 Bailey Ct, San Marcos, CA 92069</p>
                        </a>
                        <div className="flex items-center shrink-0 sm:ml-auto">
                            <p className="text-sm sm:text-base mr-2 whitespace-nowrap text-gray-800">Find Us On</p>
                            <a href="https://www.ebay.com/str/capstoneautoparts" target="_blank" rel="noopener noreferrer">
                                <img src="/ebay.svg" alt="eBay" className="w-10 h-10" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <header className={styles.header2}>
                <nav className="container mx-auto flex justify-between items-center px-4 w-full max-w-[1280px]">
                    <div className="flex items-center justify-between w-full">
                        <img className="h-12" src="/Logo_4.png" alt="Logo" />
                        
                        <div className="md:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                                aria-controls="mobile-menu"
                                aria-expanded={nav}
                                onClick={() => setNav(!nav)}
                            >
                                {nav ? (
                                    <GrClose className="w-6 h-6" />
                                ) : (
                                    <GiHamburgerMenu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap max-w-screen-lg">
                        <div className={`flex-col md:flex md:flex-row justify-between gap-4 items-center w-full md:w-auto md:order-2 transition-all duration-300 ${
                            nav
                                ? "absolute top-14 left-0 w-full bg-gray-800 text-white shadow-md p-4 md:relative md:top-0 md:w-auto md:bg-transparent md:shadow-none"
                                : "hidden md:flex gap-6"
                        }`}>
                            <ul className="flex flex-col md:flex-row md:gap-8 gap-0 md:ml-auto">
                                <li><a href="/home" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-primary-700 md:p-0 dark:text-white">Home</a></li>
                                <li><a href="https://www.ebay.com/str/capstoneautoparts" className="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Inventory</a></li>
                                <li><a href="/services" className="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a></li>
                                <li><a href="/aboutUs" className="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a></li>
                                <li><a href="/contactUs" className="block py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </section>
    );
}


