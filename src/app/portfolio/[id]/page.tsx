import PortfolioDetailsCard from "../../componets/card/PortfolioDetailsCard";

const PortfolioDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const res = await fetch(`https://my-fifth-assignment-server.vercel.app/get-single-project/${id}`)
    const data = await res.json();
   const portfolio=data?.data
    return (
        <div className="flex justify-center items-center max-h-screen">
            {/* <h1>hi{id}</h1> */}

            <PortfolioDetailsCard portfolio={portfolio} />
        </div>
    );
};

export default PortfolioDetails;