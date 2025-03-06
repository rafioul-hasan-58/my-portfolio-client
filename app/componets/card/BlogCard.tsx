import { IBlog } from "@/src/types";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";

const BlogCard = ({ item }: { item: IBlog }) => {
    // console.log(item);
    return (
        <div>
            <div className=" lg:w-[440px] bg-gradient-to-br from-gray-100 via-gray-50 to-white p-8 rounded-xl shadow-xl hover:shadow-lg transition-shadow duration-300 shrink"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <Link href={`/blogs/${item?._id}`}>
                    <div className="w-[380px] h-[280px] rounded-xl overflow-hidden cursor-pointer">
                        {
                            item?.image ? (<Image
                                width={500}
                                height={500}
                                src={item.image}
                                alt="image"
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                            />) : null
                        }
                    </div>
                </Link>
                <div className="cursor-pointer">
                    <div className="flex justify-between mt-6">
                        <p className="text-[#FF0050] uppercase">d e v e l o p m e n t</p>
                        <p className="flex items-center gap-2"><AiFillLike /> <span>600</span></p>
                    </div>
                    <h1 className="text-3xl mt-3 flex items-center gap-2 hover:text-[#FF0050] group h-[30px] pb-2">
                        {item.title}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <MdArrowOutward className="hover:text-[#FF0050]" />
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;

import React from 'react';
import { socialIcons } from "../constant";

export const SocialContact = () => {
    return (
        <div>
            <div>
                <p className="uppercase text-gray-500 my-4">f i n d <span className="mx-2">w i t h</span> m e</p>
                <div className="mt-1 flex gap-5">
                    {socialIcons.map((item) => (
                        <div
                            key={item.id}
                            className="w-16 text-2xl h-16 flex justify-center items-center bg-white rounded-md text-gray-500 hover:text-white shadow-md cursor-pointer hover:bg-[#FF0050] transition-all duration-300 hover:-translate-y-1"
                        >
                            < item.icon />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

