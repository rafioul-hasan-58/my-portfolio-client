import Image from "next/image";
import { SocialContact } from "./BlogCard";

const ContactCard = () => {
    return (
        <div>
            <div className=" lg:w-[550px] p-8 rounded-xl bg-gradient-to-br from-gray-100 via-gray-50 to-white  shadow-xl hover:shadow-lg transition-shadow duration-300 shrink"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <div className=" rounded-xl overflow-hidden cursor-pointer">
                    <Image src="https://i.ibb.co.com/8L2Zv0C5/contact1.png" alt="image" width={500} height={600} />
                </div>
                <div className="cursor-pointer">
                    <h1 className="text-3xl my-5 font-semibold">
                        Rafoul Sourav
                    </h1>
                    <p className="text-xl text-gray-600">Chief Operating Officer</p>
                    <p className="text-xl text-gray-600 my-4">I am available for freelance work. Connect with me <br /> via and call in to my account.</p>
                    <p className="text-xl text-gray-600">Phone : 01752966422<br />
                        Email : rafioulhasan2@gmail.com</p>
                </div>
                <div>
                    <SocialContact />
                </div>
            </div>
        </div>
    );
};

export default ContactCard;