import React from "react";
import WriteNav from "../components/write/WriteNav";

export default ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <>
            <WriteNav/>       
            {children}
        </>
    )
}