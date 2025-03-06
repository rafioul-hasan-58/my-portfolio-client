"use client"

import Blogs from "./blogs/page";
import Portfolio from "./portfolio/page";
import About from "./slices/About";
import Header from "./slices/Header";
import MySkills from "./slices/MySkills";
import Navbar from "./slices/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="pt-28">
        <Header />
      </div>
      <About />
      <Portfolio />
      <MySkills />
      <Blogs />
    </>
  );
}
