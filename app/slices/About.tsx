import { doData } from "../componets/constant";
const About = () => {
    return (
        <div className="mb-20 lg:mx-24">
            <div>
                <p className="uppercase mt-8 text-[#FF0050]">f e a t u r e s</p>
                <p className="text-6xl font-bold mt-3">What I Do</p>
                <div className="grid lg:grid-cols-3">
                    {
                        doData.map((item => <div key={item.id} className="lg:h-[350px] hover:text-white lg:w-[400px] mt-10 p-14 cursor-pointer bg-gray-50 shadow-lg group hover:bg-[#FF0050] rounded-md">
                            <item.icon className="text-5xl group-hover:text-white text-[#FF0050] transition-transform duration-300 group-hover:-translate-y-4 " />
                            <p className="text-3xl py-6 transition-transform duration-300 group-hover:-translate-y-4">
                                {item.title}
                            </p>
                            <p className="lg:w-[300px] text-[18px] text-gray-600 group-hover:text-white transition-transform duration-300 group-hover:-translate-y-4">
                                {item.description}
                            </p>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default About;