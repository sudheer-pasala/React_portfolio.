import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import MyText from "./Components/Introduction/Into";
import About from "./Components/sections/About/About";
import Footer from "./Components/layout/Footer";
import Services from "./Components/sections/services/Services";
import SocialMedia from "./Components/socialMedia/Icon";
import Project from "./Components/sections/Project/Project";
import ReachOut from "./Components/sections/Contact/Contact";

function App() {
  return (
    <>
    <MyText />
      <Navbar />
      <About />
      <Project />
      <Services />
      <ReachOut />
      <SocialMedia />
      <Footer year={2024} />
    </>
  );
}

export default App;
