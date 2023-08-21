import React from "react";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "../../src/container";
import { Navbar } from "../../src/components";
import "../App.css";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        {/* <Laurels /> */}
        <Gallery />
        <FindUs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
