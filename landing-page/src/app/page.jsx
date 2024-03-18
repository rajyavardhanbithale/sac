import Clubs from "./components/club/Clubs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {

  return (
    <>
      <Navbar></Navbar>
      <div className="mt-[71px]">
        <Hero></Hero>
        <div id="club">
          <Clubs></Clubs>

        </div>
        <Hero></Hero>
      </div>
    </>
  );
}
