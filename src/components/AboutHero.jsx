import React from "react";
import "./AboutHero.css";
import Services from "../components/Services";
import { Chef, Footer } from "../container";

const AboutHero = () => {
  return (
    <>
      <div className='bg-[url("https://res.cloudinary.com/dpzhezt6x/image/upload/v1692561179/banner-image-1_xw6its.jpg")] w-full bg-cover   h-[450px]'>
        <div className="flex items-center justify-center flex-col lg:pt-[10%] pt-[40%]  gap-4 ">
          <h1 className="text-[20px] text">Our Story</h1>
          <h1 className="text-[52px] text-white">About Us</h1>
        </div>
      </div>

      <div className="bg-[url('https://res.cloudinary.com/dpzhezt6x/image/upload/v1692563273/bg_f17kvb.png')] w-full h-screen scrollbar-hide">
        <div className="flex flex-col justify-center items-center text-center tracking-widest pt-10 lg:pt-10 lg:px-[18%]">
          <h1 className="text lg:text-[24px]">WHO WE ARE</h1>
          <p className="text-white mt-5 lg:text-[24px]">
            Welcome to Meal Station, where culinary excellence meets warm
            hospitality! Nestled in the{" "}
            <span className="text"> heart of Dehradun</span>, we are thrilled to
            invite you on a gastronomic journey that promises to tantalize your
            taste buds and create lasting memories.
          </p>
        </div>

        {/* ........countdown........... */}
        <div className="flex flex-wrap justify-center items-center gap-14 mt-14">
          <div className="flex flex-col  items-center">
            <h1 className="text-white text-3xl lg:text-5xl">150+</h1>
            <h1 className="text tracking-widest text-[20px]">DAILY ORDER</h1>
          </div>
          <div className="flex flex-col  items-center">
            <h1 className="text-white text-3xl lg:text-5xl">50+</h1>
            <h1 className="text tracking-widest text-[20px]">SPECIAL DISHES</h1>
          </div>
          <div className="flex flex-col  items-center">
            <h1 className="text-white text-3xl lg:text-5xl">10+</h1>
            <h1 className="text tracking-widest text-[20px]">EXPERT CHEF</h1>
          </div>
          <div className="flex flex-col  items-center">
            <h1 className="text-white text-3xl lg:text-5xl">5+</h1>
            <h1 className="text tracking-widest text-[20px]">AWARDS WON</h1>
          </div>
        </div>

        <div className="pt-8 ">
          <Services />
        </div>
      </div>
      <div className="">
        <Chef />
      </div>

      <div className="pt-">
        <Footer />
      </div>
    </>
  );
};

export default AboutHero;
