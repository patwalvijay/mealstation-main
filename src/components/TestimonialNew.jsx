import React from "react";
import { Carousel } from "@material-tailwind/react";

const TestimonialNew = () => {
  return (
    <div className="bg-black">
      <div className='bg-[url("https://res.cloudinary.com/dpzhezt6x/image/upload/v1692731656/gallery_inner_bg_ngo5bh.jpg")] z-10 w-full bg-cover h-[400px]'>
        <div className="text-center flex flex-col justify-center pt-32 gap-4 items-center">
          <h1 className="text-2xl text-white text z-50">
            Don't miss this limited-time offer{" "}
          </h1>
          <h1 className="lg:text-5xl text-4xl font-bold text z-50">
            Get Up To 70% Off!
          </h1>
          <a href="tel: 91+6397245399">
            <button className="bg-black text-white px-7 py-2 rounded-full">
              Call Now
            </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center pb-14 ">
        <div className="lg:w-[75%] bg-gray-200 rounded-3xl justify-center shadow-2xl md:[350px] -mt-20">
          <Carousel
            transition={{ type: "tween", duration: 2 }}
            autoplay={false}
            autoplayDelay={5000}
            loop={false}
            className="rounded-none "
          >
            <div className="flex :w-[75%] h-[450px] flex-col justify-center text-center items-center  bg-[url('https://res.cloudinary.com/dpzhezt6x/image/upload/v1692563273/bg_f17kvb.png')] w-full bg-cover">
              <h1 className=" text-[32px] text-white text">Testimonial</h1>
              <p className="px-14 pt-10 text-center text text-white">
                I've been a loyal patron of I've been a loyal patron of The Meal
                Station for years, and I can confidently say that it's the best
                dining experience you can find in Los Angeles. The consistent
                quality of the food and the exceptional service keep me coming
                back. Whether it's a casual lunch or a special occasion dinner,
                this restaurant always delivers for years, and I can confidently
                say that it's the best dining experience you can find in Los
                Angeles. The consistent quality of the food and the exceptional
                service keep me coming back. Whether it's a casual lunch or a
                special occasion dinner, this restaurant always delivers
              </p>
              <img
                className="w-24 h-24 pt-5 rounded-full"
                src="https://res.cloudinary.com/dpzhezt6x/image/upload/v1692732458/342261051_556560416611220_7038980757912288821_n_cwpkep.jpg"
                alt=""
              />
              <h1 className="text-[18px] pt-5 text-white text">vijay patwal</h1>
              <h1 className="text-[15px] text-white text">Customer</h1>
            </div>
            <div className="flex :w-[75%] h-[450px] flex-col justify-center text-center items-center  bg-[url('https://res.cloudinary.com/dpzhezt6x/image/upload/v1692563273/bg_f17kvb.png')] w-full bg-cover">
              <h1 className=" text-[32px] text-white text">Testimonial</h1>
              <p className="px-14 pt-10 text-center text text-white">
                I recently dined at The Meal Station and had an absolutely
                delightful experience. From the moment I walked in, I was
                greeted with warm smiles and impeccable service. The ambiance
                was cozy and inviting, making it the perfect setting for a
                romantic dinner. And the food! Oh my goodness, the food was out
                of this world.
              </p>
              <img
                className="w-24 h-24 pt-5 rounded-full"
                src="https://res.cloudinary.com/dpzhezt6x/image/upload/v1692858147/352442238_1678908975914283_6682191979308150059_n_tdrfdh.jpg"
                alt=""
              />
              <h1 className="text-[18px] pt-5 text-white text">vishal Yadav</h1>
              <h1 className="text-[15px] text-white text">Customer</h1>
            </div>
            <div className="flex :w-[75%] h-[450px] flex-col justify-center text-center items-center  bg-[url('https://res.cloudinary.com/dpzhezt6x/image/upload/v1692563273/bg_f17kvb.png')] w-full bg-cover">
              <h1 className=" text-[32px] text-white text">Testimonial</h1>
              <p className="px-14 pt-10 text-center text text-white">
                Last night, I celebrated my birthday at The Meal Station, and it
                was a night to remember. The staff went above and beyond to make
                it a special evening for me and my friends. The personalized
                menu, the beautifully decorated table, and the complimentary
                dessert with a candle made me feel truly appreciated.
              </p>
              <img
                className="w-24 h-24 pt-5 rounded-full"
                src="https://res.cloudinary.com/dpzhezt6x/image/upload/v1692858147/158225954_244633740854607_2884837442597861627_n_mjxmhp.jpg"
                alt=""
              />
              <h1 className="text-[18px] pt-5 text-white text">Kabir Chabra</h1>
              <h1 className="text-[15px] text-white text">Customer</h1>
            </div>
            <div className="flex :w-[75%] h-[450px] flex-col justify-center text-center items-center  bg-[url('https://res.cloudinary.com/dpzhezt6x/image/upload/v1692563273/bg_f17kvb.png')] w-full bg-cover">
              <h1 className=" text-[32px] text-white text">Testimonial</h1>
              <p className="px-14 pt-10 text-center text text-white">
                Whenever I have guests visiting Miami, I take them to The Meal
                Station, and every time, they leave with a smile on their faces.
                The combination of exquisite cuisine and a breathtaking
                waterfront view is unbeatable. The seafood dishes here are
                incredibly fresh and flavorful, and the cocktails are top-notch.
              </p>
              <img
                className="w-24 h-24 pt-5 rounded-full"
                src="https://res.cloudinary.com/dpzhezt6x/image/upload/v1692858171/359689395_293414826535160_1004989961729934037_n_d1xle6.jpg"
                alt=""
              />
              <h1 className="text-[18px] pt-5 text-white text">vaibhav Negi</h1>
              <h1 className="text-[15px] text-white text">Customer</h1>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialNew;
