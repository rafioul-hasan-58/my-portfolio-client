'use client';

import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const UploadProject = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const res = await axios.post('http://localhost:4000/upload-project', data)
        if (res?.data.success) {
            toast.success(res?.data?.message)
            reset()
        }
        // console.log(res.data);
    }
    return (
        <div className="border h-screen flex items-center justify-center">
            <div>
                <h1 className="text-3xl font-bold text-[#FF0050] text-center mt-10">Upload</h1>
                <div className="flex justify-center ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Title</label>
                            <input
                                className="lg:w-[400px] px-3 py-2 leading-tight text-gray-700 border rounded border-[#FF0050] appearance-none focus:outline-none focus:shadow-outline "
                                {...register('title', { required: "Title is required" })}
                                name='title'
                                type="text"
                                placeholder="Title"
                            />
                            {errors.title && <p className="text-red-500">{errors.title.message as string}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Image</label>
                            <input
                                className="lg:w-[400px] px-3 py-2 leading-tight text-gray-700 border rounded border-[#FF0050] appearance-none focus:outline-none focus:shadow-outline "
                                {...register('image',{required:'Image url is required'})}
                                name='image'
                                type="url"
                                placeholder="Image"
                            />
                            {errors.image && <p className="text-red-500">{errors.image.message as string}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Live link</label>
                            <input
                                className="lg:w-[400px] px-3 py-2 leading-tight text-gray-700 border rounded border-[#FF0050] appearance-none focus:outline-none focus:shadow-outline "
                                {...register('link',{required:'Live link is required'})}
                                name='link'
                                type="url"
                                placeholder="Live link"
                            />
                            {errors.link && <p className="text-red-500">{errors.link.message as string}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Description</label>
                            <input
                                className="lg:w-[400px] px-3 py-2 leading-tight text-gray-700 border rounded border-[#FF0050] appearance-none focus:outline-none focus:shadow-outline "
                                {...register('description',{required:'Description is required'})}
                                name='description'
                                type="text"
                                placeholder="Description"
                            />
                           {errors.description && <p className="text-red-500">{errors.description.message as string}</p>}
                        </div>

                        <input className="w-full border cursor-pointer text-white hover:bg-white hover:border hover:border-[#FF0050] hover:text-[#FF0050] transition-all duration-300 hover:-translate-y-1 bg-[#FF0050]" type="submit" value="Upload" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadProject;