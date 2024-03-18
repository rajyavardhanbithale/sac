import Clubs from "./components/club/Clubs";
import Hero from "./components/Hero";
import Incharge from "./components/incharge/incharge";
import Navbar from "./components/Navbar";

export default function Home() {

  return (
    <>
      <Navbar></Navbar>

      <div className="mt-[71px]">
        <div id="club" className=""></div>
        <Hero></Hero>
        <Clubs></Clubs>

        <div className="mt-8 mb-28"></div>

        <Incharge></Incharge>
      </div>
    </>
  );
}
