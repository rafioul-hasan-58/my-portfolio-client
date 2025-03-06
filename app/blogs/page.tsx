import { useEffect, useState } from "react";
import BlogCard from "../componets/card/BlogCard";
import { IBlog } from "@/src/types";

const Blogs = () => {
    const [blogData, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch('http://localhost:4000/get-all-blogs', { cache: 'no-store' });
            const data = await res.json();
            setBlogs(data?.data);
        };

        fetchBlogs();
    }, []);

    return (
        <div className="lg:mx-24 mb-20">
            <div>
                <p className="uppercase text-center text-[#FF0050]">v i s i t  <span className="mx-2">m y</span>b l o g<span className="mx-2">a n d</span> k e e p <span className="mx-2">y o u r</span> f e e d b a c k</p>
                <h1 className="text-center text-6xl font-bold my-7">My Blogs</h1>
                <div className="grid grid-cols-3 gap-7"> 
                    {
                        blogData?.map((item: IBlog) => <BlogCard key={item._id} item={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;