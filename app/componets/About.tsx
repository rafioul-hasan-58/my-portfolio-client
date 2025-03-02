
import { assets } from "@/assets/assets";
import Image from "next/image";

const About = () => {
    return (
        <div className="w-full px-[12%] py-10 scroll-mt-20 mt-10">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>
            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="w-64 sm:w-80 rounded-3xl max-w-none">
                    <Image src={assets.user_image} alt="user_image" className="w-full rounded-3xl" />
                </div>
                <div className="flex-1">
                    <p>
                        I am an exparienced web developer with over a decade of professional expertice in the field.Throughtout my carrier I have had the privilage of collaborating with prestigious organizations, contributing their success and growth.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;