import Listings from "@/components/Listing";

export default function Home(){
    return (
        <>
        <div>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="hover:animate-pulse">HOME PAGE</h1>
            <p className =""> Welcome to FreeWorks</p>
        </div>
            <div className="flex flex-row sm:flex-col md:flex-row justify-items-start p-0.5">
            <Listings/>
            </div>
        
        
        <div>
            <h2> Placeholder</h2>
            
        </div>
        </div>
        </>
    )
}