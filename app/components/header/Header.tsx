"use client";

import React from "react";

import { usePathname } from "next/navigation";

const Header: React.FC = () => {

    const pathname = usePathname();

    const renderTitle = () => {
        switch (pathname) {
            case "/ppob-transaction":
                return (<h1 className={`text-2xl font-bold text-whited`}>PPOB Transaction</h1>);
            case "/all-transaction":
                return (<h1 className={`text-2xl font-bold text-whited`}>All Transaction</h1>);
            default:
                return <h1></h1>;
        }
    };

    return (
        <header className="flex items-center justify-between p-4 relative bg-blue">
            { renderTitle() }
        </header>
    );
}

export default Header;

