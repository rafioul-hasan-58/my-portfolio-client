import { IMessage } from "@/src/types";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const MessageDetailsCard = ({ item }: { item: IMessage }) => {
    return (
        <div>
            <div className="flex justify-center mt-10">
                <div className="mt-10 lg:h-[580px] w-[750px] flex gap-8  p-12 rounded-lg bg-gradient-to-br from-gray-100 via-gray-50 to-white shadow-lg">
                    <div className="flex-1 mt-4">
                        <div className="flex justify-between relative">
                            <Link href={`/dashboard/messages`}>
                                <RxCross2 className=" absolute right-0 bottom-2 hover:bg-[#FF0050] hover:text-white text-lg p-2 text-[#FF0050] cursor-pointer w-11 h-11 rounded-full bg-white shadow-md" />
                            </Link>
                        </div>
                        <h1 className="text-4xl font-semibold py-4 text-[#FF0050]">{item?.subject}</h1>
                        <h1 className="text-xl text-gray-600 lg:w-[450px] lg:h-[300px]">{item?.message}</h1>
                        <h1 className="text-xl font-semibold text-[#FF0050] mt-4">From : {item?.name}</h1>
                        <p className="text-gray-700">Phone : {item?.number}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageDetailsCard;