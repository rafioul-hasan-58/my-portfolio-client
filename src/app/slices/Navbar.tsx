'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { assets } from "@/assets/assets";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
                <Image src={assets.header_bg_color} alt="bg" className="w-full" />
            </div>
            <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
                <a className="flex" href="#top">
                    <p className="text-3xl font-semibold">SOURAV</p>
                    <p className="mt-6 h-2 w-2 rounded-full bg-pink-500"></p>
                </a>
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
                    <Link className="font-Ovo" href='#top'> <li>Home</li></Link>
                    <Link className="font-Ovo" href='#top'> <li>About</li></Link>
                    <Link className="font-Ovo" href='#top'> <li>Projects</li></Link>
                    <Link className="font-Ovo" href='#top'> <li>Blogs</li></Link>
                    <Link className="font-Ovo" href='/dashboard'> <li>dashboard</li></Link>
                </ul>
                <div className="flex items-center gap-4">
                <Link href='/login'>
                <button className="bg-[#FF0050] text-white py-1 px-4 hover:border hover:border-[#FF0050] hover:bg-white hover:text-[#FF0050]">Login</button>
                </Link>
                </div>
                {/* mobile menu */}
                <ul className={`flex md:hidden flex-col gap-4 px-10 py-20 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div onClick={() => setIsOpen(false)} className="absolute right-6 top-6">
                        <Image src={assets.close_black} className="w-5  " alt="" />
                    </div>
                    <Link onClick={() => setIsOpen(false)} className="font-Ovo" href='#top'> <li>Home</li></Link>
                    <Link onClick={() => setIsOpen(false)} className="font-Ovo" href='#top'> <li>About</li></Link>
                    <Link onClick={() => setIsOpen(false)} className="font-Ovo" href='#top'> <li>Projects</li></Link>
                    <Link onClick={() => setIsOpen(false)} className="font-Ovo" href='#top'> <li>Blogs</li></Link>
                    <Link onClick={() => setIsOpen(false)} className="font-Ovo" href='#top'> <li>Contact</li></Link>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;