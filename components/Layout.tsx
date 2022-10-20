import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("./Header"), {ssr: false});

function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="bg-gradient-to-r to-[#292E49] from-[#16213E] min-h-screen h-full font-space">
            <div className="md:container lg:w-[65vw] mx-auto">
                <Header />
                <main className="text-white">{children}</main>
            </div>
        </div>
    );
}

export default Layout;
