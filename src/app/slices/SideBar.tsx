'use client';
import { IoCreateOutline } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHome } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { signOut } from "next-auth/react";
const Sidebar = () => {
    const path = usePathname()
    // console.log(path,'path');
    return (
        <aside className=" border border-r border-r-[#FF0050] border-gray-300 flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white ">
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="flex-1 -mx-3 space-y-3 mt-6">

                    <h1 className="text-center text-2xl font-semibold text-[#FF0050]">Dashboard</h1>
                    <Link href='/' className={
                        ` flex  items-center px-3 py-2 text-[#FF0050] hover:bg-[#FF0050] hover:text-white transition-colors duration-300 transform  `
                    }>
                        <IoHome className="text-xl" />
                        <span className="mx-2 text-[16px] font-medium">Home</span>
                    </Link>
                    <Link href='/dashboard/upload-project' className={
                        ` ${path === '/dashboard/upload-project' && 'bg-[#FF0050] text-white'} flex items-center hover:bg-[#FF0050] hover:text-white   px-3 py-2 text-[#FF0050] transition-colors duration-300 transform  `
                    }>
                        <FaCloudUploadAlt className="text-xl" />
                        <span className="mx-2 text-[16px] font-medium">Upload Project</span>
                    </Link>
                    <Link href='/dashboard/projects' className={
                        ` ${path === '/dashboard/projects' && 'bg-[#FF0050] text-white'} flex items-center hover:bg-[#FF0050] hover:text-white  px-3 py-2 text-[#FF0050] transition-colors duration-300 transform  `
                    }>
                        <GoProjectRoadmap className="text-xl" />
                        <span className="mx-2 text-[16px] font-medium">All Projects</span>
                    </Link>
                    <Link href='/dashboard/messages' className={
                        ` ${path === '/dashboard/messages' && 'bg-[#FF0050] text-white'} flex items-center hover:bg-[#FF0050] hover:text-white  px-3 py-2 text-[#FF0050] transition-colors duration-300 transform  `
                    }>
                        <FaRegMessage className="text-xl" />
                        <span className="mx-2 text-[16px] font-medium">Messages</span>
                    </Link>
                    <Link href='/dashboard/write-blog' className={
                        ` ${path === '/dashboard/write-blog' && 'bg-[#FF0050] text-white'} flex items-center hover:bg-[#FF0050] hover:text-white  px-3 py-2 text-[#FF0050] transition-colors duration-300 transform  `
                    }>
                        <IoCreateOutline className="text-xl" />
                        <span className="mx-2 text-[16px] font-medium">Write Blog</span>
                    </Link>
                    <Link href='/dashboard/blogs' className={
                        ` ${path === '/dashboard/blogs' && 'bg-[#FF0050] text-white'} flex items-center hover:bg-[#FF0050] hover:text-white  px-3 py-2 text-[#FF0050] transition-colors duration-300 transform  `
                    }>
                        <MdOutlineMessage className="text-xl" />
                        <span className="mx-2 text-[16px] font-medium">All Blogs</span>
                    </Link>
                </nav>
                <div onClick={()=>signOut()} className="mb-10 flex items-center text-[#FF0050] hover:text-white cursor-pointer hover:bg-[#FF0050] py-1 -mx-2">
                    <CiLogout className="text-2xl" />
                    <span className="mx-2 text-[16px] font-medium">Logout</span>
                </div>
            </div>
        </aside >
    );
};

export default Sidebar;