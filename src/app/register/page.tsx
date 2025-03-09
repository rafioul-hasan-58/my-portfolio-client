'use client';

import { registerUser } from "@/src/actions/serverActions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { toast } from "sonner";
const Register = () => {
   const [formData, setFormData] = useState({ email: "", password: "",name:"", remember: false });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const router=useRouter()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log("Register data:", formData);
        // Handle registration logic here
        registerUser(formData)
        toast.success('Registered Successfully')
        router.push('/login')
        console.log('hi');
      };
    return (
        <div className="lg:mx-44 ">
            <div className="flex">
                <div className="w-3/5 ">
                    <Image src='https://i.ibb.co.com/pvDMvdPW/SignUp.jpg' alt="signup" width={600} height={400} />
                </div>
                <div className="w-2/5   max-h-screen">
                    <div className="lg:relative top-28 border-2 border-gray-200 border-b-0 p-10 rounded-xl">
                        <h1 className="text-2xl  text-center text-blue-600">Enter Your Credentials</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Email</label>
                                <input
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded border-blue-300 appearance-none focus:outline-none focus:shadow-outline bg-gray-100"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    placeholder="Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Email</label>
                                <input
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded border-blue-300 appearance-none focus:outline-none focus:shadow-outline bg-gray-100"
                                    value={formData.email}
                                    onChange={handleChange}
                                    name='email'
                                    required
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Password</label>
                                <input
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded border-blue-300 appearance-none focus:outline-none focus:shadow-outline bg-gray-100"
                                    value={formData.password}
                                    onChange={handleChange}
                                    name='password'
                                    type="text"
                                    required
                                    placeholder="Password"
                                />
                            </div>
                            <div className="w-full">
                                <button className="bg-blue-500 text-white px-3 hover:border hover:border-blue-500 hover:bg-white hover:text-blue-500 w-full">Login</button>
                            </div>
                            
                            <h1 className="text-center mt-2 text-blue-500">New here?<Link className="text-black" href='/login'>Login</Link></h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;