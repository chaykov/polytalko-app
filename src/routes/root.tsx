import {Outlet} from "react-router";
import Navbar from "@/common/components/Navbar.tsx";
import Footer from "@/common/components/Footer.tsx";

export default function Root() {
    return (
        <div className="flex flex-col min-h-screen">
            <nav>
                <Navbar/>
            </nav>
            <main className="flex-1 p-4 w-full max-w-7xl mx-auto">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}