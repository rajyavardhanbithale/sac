import Clubs from "./components/Clubs/Clubs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  
  return (
    <>
      <Navbar></Navbar>
      <div className="mt-[71px]">
        <Hero></Hero>
        <Clubs></Clubs>
      </div>
    </>
  );
}
