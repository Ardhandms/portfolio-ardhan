import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Tentang from "./components/Tentang";
import Beranda from "./components/Beranda";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Beranda />
      <About />
      <Tentang />
      <Projects />
      <Contact />
    </main>
  );
}
