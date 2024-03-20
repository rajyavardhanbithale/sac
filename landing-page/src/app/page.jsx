import Clubs from "./components/club/Clubs";
import Footer from "./components/Footer";
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

      <div className=" mb-[71px]">

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

      
      <LogoPan></LogoPan>

    <Footer></Footer>
    </>
  );
}

// 1.Navbar transparent krna hai
// 2. Jo college ka photo hai usko upar se extend krde cloud ko aur side side se crop krde taki image bada hojaye aur image ke upar STUDENT ACTIVITY CENTER likha jaye 
// 3. Aur mission vision ko uske neeche le aana image ke neeche
// 4. Aur jab club ke upar hover hoga na to club logo ko thora magnify kr dena