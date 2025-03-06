'use client';
import { IBlog } from "@/src/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";

const BlogDetailsCard = ({ blog }: { blog: IBlog }) => {
    const router = useRouter()
    const handleNavigate = () => {
        router.push('/')
    }
    return (
        <div>
            <div className="mx-9 mt-10 flex gap-8  p-12 rounded-lg bg-gradient-to-br from-gray-100 via-gray-50 to-white shadow-lg">
                <div>
                    {blog?.image ? (
                        <Image
                            className="rounded-lg"
                            src={blog.image}
                            alt="image"
                            height={330}
                            width={600}
                        />
                    ) : null}
                </div>
                <div className="flex-1">
                    <div className="flex justify-between relative">
                        <p className="text-xl text-gray-600">Programming blog</p>
                        <RxCross2 onClick={handleNavigate} className="absolute right-0 bottom-6 hover:bg-[#FF0050] hover:text-white text-lg p-2 text-[#FF0050] cursor-pointer w-11 h-11 rounded-full bg-white shadow-md" />
                    </div>
                    <h1 className="text-4xl font-semibold py-4">{blog?.title}</h1>
                    <h1 className="text-xl text-gray-600 ">{blog?.description}</h1>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsCard;