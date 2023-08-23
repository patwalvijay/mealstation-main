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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates, explicabo, rem molestiae voluptas reiciendis, esse
                nam soluta repellat mollitia minus maxime. Officia eum at non
                ipsam modi illum, laudantium autem?
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates, explicabo, rem molestiae voluptas reiciendis, esse
                nam soluta repellat mollitia minus maxime. Officia eum at non
                ipsam modi illum, laudantium autem?
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates, explicabo, rem molestiae voluptas reiciendis, esse
                nam soluta repellat mollitia minus maxime. Officia eum at non
                ipsam modi illum, laudantium autem?
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates, explicabo, rem molestiae voluptas reiciendis, esse
                nam soluta repellat mollitia minus maxime. Officia eum at non
                ipsam modi illum, laudantium autem?
              </p>
              <img
                className="w-24 h-24 pt-5 rounded-full"
                src="https://res.cloudinary.com/dpzhezt6x/image/upload/v1692732458/342261051_556560416611220_7038980757912288821_n_cwpkep.jpg"
                alt=""
              />
              <h1 className="text-[18px] pt-5 text-white text">vijay patwal</h1>
              <h1 className="text-[15px] text-white text">Customer</h1>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialNew;
