import Image from "next/image";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-50 h-[400px] flex justify-center items-center">
                <div className="">
                    <Image src='https://i.ibb.co.com/jkc3Lb4R/images-1-removebg-preview.png' alt="img" width={80} height={80} className="relative ml-24 border rounded-full border-pink-600"/>
                    <p className="text-lg font-semibold text-center mr-10">Sourav</p>
                    <p className="text-lg text-gray-600 text-center">© Copyright 2025. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;