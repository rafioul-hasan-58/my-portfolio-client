'use server'

import { registerUser } from "@/src/actions/serverActions";
import authOptions from "@/src/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
    const session = await getServerSession(authOptions);
    await registerUser(session?.user)
    return (
        <div>
            <h1>This is Dashobard page :{session?.user?.email}</h1>
        </div>
    );
};

export default DashboardPage;