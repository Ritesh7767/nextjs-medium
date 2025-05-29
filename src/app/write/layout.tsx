import React from "react";
import WriteNav from "../components/write/WriteNav";

export default function layout ({children}: Readonly<{children: React.ReactNode}>){
    return (
        <>
            <WriteNav/>       
            {children}
        </>
    )
}