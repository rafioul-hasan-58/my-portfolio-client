"use server";

import { registerUser } from "@/src/actions/serverActions";
import authOptions from "@/src/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
    const session = await getServerSession(authOptions);

    if (session?.user) {
        const { name, email } = session.user;

        // Ensure required fields are present
        if (name && email) {
            await registerUser({ name, email });
        }
    }

    return (
        <div className="flex items-center justify-center mt-20">
            <h1 className="text-4xl font-bold text-center">Welcome <br /> <span className="text-blue-500">{session?.user?.name}</span> <br /> in my portfolio</h1>
        </div>
    );
};

export default DashboardPage;
