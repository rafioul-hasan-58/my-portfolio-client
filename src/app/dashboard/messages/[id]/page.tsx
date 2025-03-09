import MessageDetailsCard from "@/src/app/componets/card/MessageDetailsCard";

const MessageDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const res = await fetch(`https://my-fifth-assignment-server.vercel.app/get-single-message/${id}`)
    const data = await res.json();
   const item=data?.data
    return (
        <div className="flex justify-center items-center max-h-screen">
            {/* <h1>hi{id}</h1> */}

            <MessageDetailsCard item={item} />
        </div>
    );
};

export default MessageDetails;