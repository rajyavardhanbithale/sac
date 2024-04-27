import Clubs from "./components/club/Clubs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Incharge from "./components/incharge/incharge";
import LogoPan from "./components/LogoPan";
import Navbar from "./components/Navbar";

export default function Home() {
  
  return (
    <>
      <Navbar></Navbar>

      <div className="">

        <Hero></Hero>

        <div id="club" className=""></div>
        <div className="-mt-3"></div>
        <Clubs></Clubs>

 
        <div id="incharge" className=""></div>
        <div className="mt-0 mb-0"></div>
        <Incharge></Incharge>


        <div id="gallery" className=""></div>

        <Gallery></Gallery>
        <div className="mt-20"></div>
      </div>

      
      <LogoPan></LogoPan>

    <Footer></Footer>
    </>
  );
}



