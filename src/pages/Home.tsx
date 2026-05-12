import Listings from "@/components/Listing";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center h-screen">
          <p className=" text-8xl animate-bounce"> Welcome to the FUNHUB</p>
        </div>
        <div className="flex flex-row sm:flex-col md:flex-row justify-items-start p-0.5">
          <Listings />
        </div>
      </div>
    </>
  );
}
