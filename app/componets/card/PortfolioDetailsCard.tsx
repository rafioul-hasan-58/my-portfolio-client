'use client';
import { IPortfolio } from "@/src/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiFillLike } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const PortfolioDetailsCard = ({ portfolio }: { portfolio: IPortfolio }) => {
    const router = useRouter()
    const handleNavigate = () => {
        router.push('/')
    }
    return (
        <div>
            <div className="mt-10 flex gap-8  p-12 rounded-lg bg-gradient-to-br from-gray-100 via-gray-50 to-white shadow-lg">
                <div>
                    {portfolio?.image ? (
                        <Image
                            className="rounded-lg"
                            src={portfolio.image}
                            alt="image"
                            height={310}
                            width={530}
                        />
                    ) : null}
                </div>
                <div className="flex-1 mt-4">
                    <div className="flex justify-between relative">
                        <p className="text-xl text-gray-600">Featured-Design</p>
                        <RxCross2 onClick={handleNavigate} className="absolute right-0 bottom-6 hover:bg-[#FF0050] hover:text-white text-lg p-2 text-[#FF0050] cursor-pointer w-11 h-11 rounded-full bg-white shadow-md" />
                    </div>
                    <h1 className="text-4xl font-semibold py-4">{portfolio?.title}</h1>
                    <h1 className="text-xl text-gray-600 lg:w-[450px]">{portfolio?.description}</h1>
                    <div className="flex gap-5 mt-8">
                        <button className="uppercase flex items-center gap-1  py-2 px-4 text-[#FF0050]  bg-white rounded-md  hover:text-white shadow-md cursor-pointer hover:bg-[#FF0050] transition-all duration-300 hover:-translate-y-1">Like This <AiFillLike /></button>
                        {
                            portfolio?.link ? (<Link href={portfolio?.link}>
                                <button className="uppercase flex items-center gap-1  py-2 px-4 text-[#FF0050]  bg-white rounded-md  hover:text-white shadow-md cursor-pointer hover:bg-[#FF0050] transition-all duration-300 hover:-translate-y-1">view project<MdArrowForwardIos /></button>
                            </Link>) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsCard;