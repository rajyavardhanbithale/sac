import Clubs from "./components/club/Clubs";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Incharge from "./components/incharge/incharge";
import LogoPan from "./components/LogoPan";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

export default function Home() {
  
  return (
    <>
      <Navbar></Navbar>

      <div className="mt-[71px] mb-[71px]">

        <div id="club" className=""></div>
        <Hero></Hero>

        <div className="py-4"></div>
        <Clubs></Clubs>

 
        <div id="incharge" className=""></div>
        <div className="mt-0 mb-0"></div>
        <Incharge></Incharge>

        <div id="gallery" className=""></div>
        <Gallery></Gallery>
      </div>

      
      {/* <LogoPan></LogoPan> */}


    </>
  );
}

