'use client';
import { IPortfolio } from "@/src/types";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
const UpdateProjectPage = ({ id }: { id: string }) => {
    const [portfolioData, setProject] = useState<IPortfolio | null>(null);
    const router = useRouter()
    useEffect(() => {
        const fetchProjects = async () => {
            const res = await fetch(`https://my-fifth-assignment-server.vercel.app/get-single-project/${id}`, { cache: 'no-store' });
            const data = await res.json();

            setProject(data?.data);
        };

        fetchProjects();
    }, [id]);
    // console.log(portfolioData);
    const { register, handleSubmit } = useForm()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const updatedData = {
            title: data.title || portfolioData?.title,
            image: data.image || portfolioData?.image,
            link: data.link || portfolioData?.link,
            description: data.description || portfolioData?.description
        }
        const res = await axios.patch(`https://my-fifth-assignment-server.vercel.app/update-project/${id}`, updatedData)
        if (res?.data.success) {
            toast.success(res?.data?.message)
            router.push('/dashboard/projects')
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
                            defaultValue={portfolioData?.title}
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
                            defaultValue={portfolioData?.image}
                            {...register('image')}
                            name='image'
                            type="url"
                            placeholder="Image"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Live link</label>
                        <input
                            className="lg:w-[400px] px-3 py-2 leading-tight text-gray-700 border rounded border-[#FF0050] appearance-none focus:outline-none focus:shadow-outline "
                            defaultValue={portfolioData?.link}
                            {...register('link')}
                            name='link'
                            type="url"
                            placeholder="Live link"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Description</label>
                        <input
                            className="lg:w-[400px] px-3 py-2 leading-tight text-gray-700 border rounded border-[#FF0050] appearance-none focus:outline-none focus:shadow-outline "
                            {...register('description')}
                            defaultValue={portfolioData?.description}
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

export default UpdateProjectPage;