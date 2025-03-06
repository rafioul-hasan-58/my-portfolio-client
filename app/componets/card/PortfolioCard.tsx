import { IPortfolio } from "@/src/types";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";

const PortfolioCard = ({ item }: { item: IPortfolio }) => {
    return (
        <div>
            <div key={item._id} className=" lg:w-[440px] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 shrink"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <div className="w-[380px] h-[280px] rounded-xl overflow-hidden cursor-pointer">
                    <Link href={`/portfolio/${item._id}`}>
                        {
                            item.image ? (<Image
                                width={500}
                                height={500}
                                src={item.image}
                                alt="image"
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                            />) : null
                        }

                    </Link>
                </div>
                <div className="cursor-pointer">
                    <div className="flex justify-between mt-6">
                        <p className="text-[#FF0050] uppercase">d e v e l o p m e n t</p>
                        <p className="flex items-center gap-2"><AiFillLike /> <span>600</span></p>
                    </div>
                    <h1 className="text-3xl mt-3 flex items-center gap-2 hover:text-[#FF0050] group">
                        <Link href={`/portfolio/${item._id}`}>
                            {item.title}
                        </Link>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <MdArrowOutward className="hover:text-[#FF0050]" />
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;