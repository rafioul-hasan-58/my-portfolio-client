'use client';
import { IPortfolio } from "@/src/types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllProjects = () => {
    const [portfolioData, setProjects] = useState([]);
    const fetchProjects = async () => {
        const res = await fetch('http://localhost:4000/get-all-projects', { cache: 'no-store' });
        const data = await res.json();
        setProjects(data?.data);
    };
    useEffect(() => {
        fetchProjects();
    }, []);
    const deleteProject = async (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`http://localhost:4000/delete-project/${id}`)
                fetchProjects()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }

        });
    }
    return (
        <div>
            <div>
                <h1 className="text-3xl text-center font-bold text-[#FF0050] mt-10">All Products</h1>
                <section className="container px-4 mx-auto mt-5">
                    <div className="flex flex-col">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 ">
                                        <thead className="bg-[#FF0050] ">
                                            <tr>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                                    Image
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                                    Title
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                                    Developer
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                                    Update
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                                    Delete
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 ">
                                            {
                                                portfolioData?.map((item: IPortfolio) => <tr key={item?._id} className="w-full">
                                                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                        <Image src={item.image} alt="image" width={80} height={80} />
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                        {item.title}
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">Sourav</td>
                                                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                                        <Link href={`/dashboard/update-project/${item._id}`}>
                                                            <button className="bg-[#FF0050] text-white p-2 rounded-lg hover:border-[#FF0050]  hover:text-[#FF0005] hover:bg-white">Update</button>
                                                        </Link>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                        <button onClick={() => deleteProject(item?._id)} className="bg-red-500 text-white p-2 rounded-md hover:bg-purple-400">Delete</button>
                                                    </td>

                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AllProjects;