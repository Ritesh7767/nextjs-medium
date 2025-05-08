import Navbar from "../components/home/Navbar"

export default ({children}:Readonly<{children: React.ReactNode}>) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}