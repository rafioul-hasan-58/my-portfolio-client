'use client';
import axios from "axios";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
const UpdateBlogPage = ({ id }: { id: string }) => {
    const [blogData, setBlogs] = useState([]);
    const router = useRouter()
    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch(`http://localhost:4000/get-single-blog/${id}`, { cache: 'force-cache' });
            const data = await res.json();

            setBlogs(data?.data);
        };

        fetchBlogs();
    }, [id]);
    // console.log(portfolioData);
    const { register, handleSubmit } = useForm()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const updatedData = {
            title: data.title || blogData?.title,
            image: data.image || blogData?.image,
            description: data.description || blogData?.description
        }
        const res = await axios.patch(`http://localhost:4000/update-blog/${id}`, updatedData)
        if (res?.data.success) {
            toast.success(res?.data?.message)
            router.push('/dashboard/all-blogs')
        }
        // console.log(res.data);
    }
    return (
        <div>
            <div className="flex justify-center ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Title</label>
                        <input
                            className="lg:w-[400px] px-3 py-2 leading-tight text-gray-700 border rounded border-[#FF0050] appearance-none focus:outline-none focus:shadow-outline "
                            defaultValue={blogData?.title}
                            {...register('title')}
                            name='title'
                            type="text"
                            placeholder="Title"
                        />

                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Image</label>
                        <input
                            className="lg:w-[400px] px-3 py-2 leading-tight text-gray-700 border rounded border-[#FF0050] appearance-none focus:outline-none focus:shadow-outline "
                            defaultValue={blogData?.image}
                            {...register('image')}
                            name='image'
                            type="url"
                            placeholder="Image"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Description</label>
                        <input
                            className="lg:w-[400px] px-3 py-2 leading-tight text-gray-700 border rounded border-[#FF0050] appearance-none focus:outline-none focus:shadow-outline "
                            {...register('description')}
                            defaultValue={blogData?.description}
                            name='description'
                            type="text"
                            placeholder="Description"
                        />

                    </div>

                    <input className="w-full border cursor-pointer text-white hover:bg-white hover:border hover:border-[#FF0050] hover:text-[#FF0050] transition-all duration-300 hover:-translate-y-1 bg-[#FF0050]" type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default UpdateBlogPage;