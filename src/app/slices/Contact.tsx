import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ContactCard from "../componets/card/ContactCard";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const res = await axios.post('http://localhost:4000/send-message', data)
        if (res?.data?.success) {
            Swal.fire({
                title: "Message sent!",
                icon: "success",
                draggable: true
            });
            reset()
        }
        // console.log(res.data);
    }
    return (
        <div className="lg:mx-24 mb-20">
            <div className="text-center my-9">
                <p className="uppercase mt-8 text-[#FF0050]">c o n t a c t</p>
                <p className="text-6xl font-bold mt-3">Contact With Me</p>
            </div>
            <div className="flex gap-5">
                <div>
                    <ContactCard />
                </div>
                <div className="flex-1 bg-gradient-to-b from-gray-100 via-gray-50 to-white shadow-lg rounded-lg p-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-4">
                            <div className="mb-4 flex-1">
                                <label className="block mb-2 text-sm  text-gray-700 uppercase" htmlFor="username">Your Name</label>
                                <input
                                    className=" w-full px-3 leading-tight text-gray-700 border-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:shadow-outline bg-white py-4 "
                                    {...register('name', { required: "Name is required" })}
                                    name='name'
                                    type="text"

                                />
                                {errors.name && <p className="text-red-500">{errors.name.message as string}</p>}
                            </div>
                            <div className="mb-4 flex-1">
                                <label className="block mb-2 text-sm  text-gray-700 uppercase" htmlFor="username">phone number</label>
                                <input
                                    className=" w-full px-3 leading-tight text-gray-700 border-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:shadow-outline bg-white py-4 "
                                    {...register('number', { required: "Phone number is required" })}
                                    name='number'
                                    type="number"

                                />
                                {errors.name && <p className="text-red-500">{errors.name.message as string}</p>}
                            </div>
                        </div>
                        <div className="mb-4 flex-1">
                            <label className="block mb-2 text-sm  text-gray-700 uppercase" htmlFor="username">Email</label>
                            <input
                                className=" w-full px-3 leading-tight text-gray-700 border-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:shadow-outline bg-white py-4 "
                                {...register('email', { required: "Email is required" })}
                                name='email'
                                type="email"

                            />
                            {errors.email && <p className="text-red-500">{errors.email.message as string}</p>}
                        </div>
                        <div className="mb-4 flex-1">
                            <label className="block mb-2 text-sm  text-gray-700 uppercase" htmlFor="username">subject</label>
                            <input
                                className=" w-full px-3 leading-tight text-gray-700 border-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:shadow-outline bg-white py-4 "
                                {...register('subject', { required: "Subject is required" })}
                                name='subject'
                                type="text"

                            />
                            {errors.subject && <p className="text-red-500">{errors.subject.message as string}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm text-gray-700 uppercase" htmlFor="message">
                                Your Message
                            </label>
                            <textarea
                                className="w-full px-3 py-2 leading-tight text-gray-700 border-2 rounded border-[#FF0050] appearance-none focus:outline-none focus:shadow-outline"
                                {...register('message', { required: 'Message is required' })}
                                name="message"
                                rows={12}
                                placeholder="Enter your Message"
                            />
                            {errors.description && <p className="text-red-500">{errors.description.message as string}</p>}
                        </div>

                        <button className="w-full bg-gradient-to-r from-gray-100 via-gray-50 to-white  flex items-center justify-center gap-1 cursor-pointer py-3 rounded-lg text-[#FF0050]  hover:border   hover:text-white  hover:bg-gradient-to-r hover:from-[#FF0050]  hover:via-[#FF0050]  hover:to-[#FF0050] transition-all duration-300 shadow-lg hover:-translate-y-1 " type="submit">Send Message <span><FaArrowRight /></span></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;