'use client';
import { signIn } from 'next-auth/react'
import goo from '../../../assets/google.png'
import git from '../../../assets/github.png'
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
const Login = () => {

    const [formData, setFormData] = useState({ email: "", password: "", remember: false });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };


    const onSubmit= async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login data:", formData);
        // Handle authentication logic here
        signIn('credentials', {
            email: formData.email,
            password: formData.password,
            redirect: true,
            callbackUrl: 'http://localhost:3000'
        })
    }

    const handleSocialLogin = (provider: string) => {
        console.log(`Logging in with ${provider}`);
        // Implement NextAuth or other OAuth logic here
        if (provider === 'github') {
            signIn('github', { callbackUrl: 'http://localhost:3000/dashboard' })
        }
        else if (provider === 'google') {
            signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' })
        }
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
                        <form onSubmit={onSubmit}>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Email</label>
                                <input
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded border-blue-300 appearance-none focus:outline-none focus:shadow-outline bg-gray-100"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Password</label>
                                <input
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded border-blue-300 appearance-none focus:outline-none focus:shadow-outline bg-gray-100"
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="w-full">
                                <button className="bg-blue-500 text-white px-3 hover:border hover:border-blue-500 hover:bg-white hover:text-blue-500 w-full">Login</button>
                            </div>
                            <div className="flex items-center mt-3">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="px-2 text-gray-700 text-lg">or connect with</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>
                            <div className="flex justify-center items-center gap-3">
                                <Image onClick={() => handleSocialLogin('github')} className="cursor-pointer" src={git} alt="icon" height={56} width={56} />
                                <Image onClick={() => handleSocialLogin('google')} className="cursor-pointer" src={goo} alt="icon" height={40} width={40} />
                            </div>
                            <h1 className="text-center mt-2 text-blue-500">New here?<Link className="text-black" href='/register'>Register</Link></h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;