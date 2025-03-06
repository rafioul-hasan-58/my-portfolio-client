'use client';
import { IoCreateOutline } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHome } from "react-icons/io5";
const Sidebar = () => {
    const path = usePathname()
    // console.log(path,'path');
    return (
        <aside className=" border border-gray-300 flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white ">
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="flex-1 -mx-3 space-y-3 mt-6">
          
                    <h1 className="text-center text-2xl font-semibold text-[#FF0050]">Dashboard</h1>
                    <Link href='/' className={
                        ` flex border border-[#FF0050] items-center px-3 py-2 text-[#FF0050] hover:bg-[#FF0050] hover:text-white transition-colors duration-300 transform  `
                    }>
                        <IoHome className="text-xl" />
                        <span className="mx-2 text-sm font-medium">Home</span>
                    </Link>
                    <Link href='/dashboard/upload-project' className={
                        `border border-[#FF0050] ${path === '/dashboard/upload-project' && 'bg-[#FF0050] text-white'} flex items-center hover:bg-[#FF0050] hover:text-white   px-3 py-2 text-[#FF0050] transition-colors duration-300 transform  `
                    }>
                        <FaCloudUploadAlt className="text-xl" />
                        <span className="mx-2 text-sm font-medium">Upload Project</span>
                    </Link>
                    <Link href='/dashboard/all-projects' className={
                        `border border-[#FF0050] ${path === '/dashboard/all-projects' && 'bg-[#FF0050] text-white'} flex items-center hover:bg-[#FF0050] hover:text-white  px-3 py-2 text-[#FF0050] transition-colors duration-300 transform  `
                    }>
                        <GoProjectRoadmap className="text-xl" />
                        <span className="mx-2 text-sm font-medium">All Projects</span>
                    </Link>
                    <Link href='/dashboard/all-projects' className={
                        `border border-[#FF0050] ${path === '/dashboard/all-projects' && 'bg-[#FF0050] text-white'} flex items-center hover:bg-[#FF0050] hover:text-white  px-3 py-2 text-[#FF0050] transition-colors duration-300 transform  `
                    }>
                        <FaRegMessage className="text-xl" />
                        <span className="mx-2 text-sm font-medium">Messages</span>
                    </Link>
                    <Link href='/dashboard/write-blog' className={
                        `border border-[#FF0050] ${path === '/dashboard/write-blog' && 'bg-[#FF0050] text-white'} flex items-center hover:bg-[#FF0050] hover:text-white  px-3 py-2 text-[#FF0050] transition-colors duration-300 transform  `
                    }>
                        <IoCreateOutline className="text-xl" />
                        <span className="mx-2 text-sm font-medium">Write Blog</span>
                    </Link>
                    <Link href='/dashboard/all-blogs' className={
                        `border border-[#FF0050] ${path === '/dashboard/all-blogs' && 'bg-[#FF0050] text-white'} flex items-center hover:bg-[#FF0050] hover:text-white  px-3 py-2 text-[#FF0050] transition-colors duration-300 transform  `
                    }>
                        <MdOutlineMessage className="text-xl" />
                        <span className="mx-2 text-sm font-medium">All Blogs</span>
                    </Link>
                </nav>
            </div>
        </aside >
    );
};

export default Sidebar;