'use client';
import { IPortfolio } from "@/src/types";
import PortfolioCard from "../componets/card/PortfolioCard";
import { useEffect, useState } from "react";

const Portfolio = () => {
    const [portfolioData, setProjects] = useState([]);
    console.log(process.env.SERVER_URL)
    useEffect(() => {
        const fetchProjects = async () => {
            const res = await fetch(`https://my-fifth-assignment-server.vercel.app/get-all-projects`, { cache: 'no-store' });
            const data = await res.json();
            setProjects(data?.data);
        };

        fetchProjects();
    }, []);
    // console.log(portfolioData);
    return (
        <div className="mb-20 lg:mx-24">
            <div>
                <p className="uppercase text-center text-[#FF0050]">v i s i t  <span className="mx-2">m y</span>  p o r t f o l i o <span className="mx-2">a n d</span> k e e p <span className="mx-2">y o u r</span> f e e d b a c k</p>
                <h1 className="text-center text-6xl font-bold my-7">My Portfolio</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        portfolioData?.map((item: IPortfolio) => <PortfolioCard key={item._id} item={item} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;