"use client"

import About from "./componets/About";
import Header from "./componets/Header";
import Navbar from "./componets/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="pt-20">
        <Header />
      </div>
      <About />
    </>
  );
}
