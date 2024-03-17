import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {

  return (
    <>
      <Navbar></Navbar>
      <div className="mt-[76px]">
        <Hero></Hero>

      </div>
    </>
  );
}
