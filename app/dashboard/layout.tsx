import { ReactNode } from "react";
import SideBar from "../slices/SideBar";

interface LayoutProps {
    children: ReactNode; // Represents the nested pages inside the layout
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex">
            <div>
                <SideBar />
            </div>
            <div className="w-full">{children}</div>
        </div>
    );
}
