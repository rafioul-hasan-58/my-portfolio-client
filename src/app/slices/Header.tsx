import { assets } from "@/assets/assets";
import Image, { StaticImageData } from "next/image";

import { Typewriter } from 'react-simple-typewriter'
import { SocialContact } from "../componets/card/BlogCard";

type AssetType = {
    id: number;
    src: string | StaticImageData;
    alt: string;
};

// Store assets in an array
const assetIcons: AssetType[] = [
    { id: 1, src: assets.figma, alt: "Figma" },
    { id: 2, src: assets.firebase, alt: "Firebase" },
    { id: 3, src: assets.mongodb, alt: "MongoDB" }
];
const Header = () => {

    return (
        <div className="lg:mx-24">
            <div className="flex lg:flex-row gap-3 flex-col items-center justify-between">
                <div>
                    <p className="uppercase text-gray-600 lg:mt-0 mt-3">w e l c o m e   <span className="mx-3">t o</span>  m y <span className="ml-2">w o r l d</span></p>
                    <h1 className="lg:text-6xl text-3xl font-bold mt-3">Hi, I’m <span className="text-[#FF0050]">Rafioul Hasan</span></h1>
                    <p className="lg:text-5xl font-bold my-4">
                        <span className="text-[#FF0050] mx-2">a</span>
                        <Typewriter
                            words={['Programmer', 'Developer.', 'Learner.']}
                            loop={-1}
                            typeSpeed={80}
                            deleteSpeed={80}
                            delaySpeed={1000}
                        />
                        <span className=" text-[#FF0050]">|</span>
                    </p>
                    <p className="lg:w-[580px] py-4  text-gray-600 text-lg leading-9">I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

                    <div className="flex justify-between mt-6">
                        <SocialContact />
                        <div>
                            <p className="uppercase text-gray-500 my-4">b e s t<span className="mx-2">s k i l l s</span>i n </p>
                            <div className="flex gap-5">
                                {assetIcons.map((asset) => (
                                    <div
                                        key={asset.id}
                                        className="w-16 h-16 flex justify-center items-center bg-white rounded-md text-gray-500 hover:text-white shadow-md cursor-pointer"
                                    >
                                        <Image src={asset.src} alt={asset.alt} className="w-8" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={assets.user_image} alt="" className="bg-gray-100 w-[400px]  shadow-xl shadow-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default Header;