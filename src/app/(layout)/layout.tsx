import Navbar from "../components/home/Navbar"

export default function layout ({children}:Readonly<{children: React.ReactNode}>){
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}