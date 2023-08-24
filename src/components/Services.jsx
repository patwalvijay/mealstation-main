import React from "react";

const Services = () => {
  return (
    <>
      <div className="px-4 bg-[url('https://res.cloudinary.com/dpzhezt6x/image/upload/v1692563273/bg_f17kvb.png')] w-full  scrollbar-hide">
        <div className="text-white flex flex-col justify-center items-center mt-20">
          <h1 className="text text-[24px]">Our Services</h1>

          <h1 className="lg:text-[32px] text-[24px]">
            Exquisite Restaurant in City
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-14 mt-16 ">
          <div>
            <div>
              <img
                className="rounded-full w-24 h-24 bg-black hover:animate-bounce will-change-transform"
                src="https://res.cloudinary.com/dpzhezt6x/image/upload/v1692608740/s-icon-1_jlwpxf.png"
                alt="packing"
              />
              <div className="text-white lg:w-80">
                <h1 className="text text-lg">Door Delivery</h1>
                <p>
                  We bring our exquisite cuisine to your doorstep - fast, fresh,
                  and hassle-free. Enjoy The Meal Station wherever you are.
                </p>
              </div>
            </div>
            <div className="pt-5">
              <img
                className="rounded-full w-24 h-24 bg-black hover:animate-bounce will-change-transform"
                src="https://res.cloudinary.com/dpzhezt6x/image/upload/v1692608740/s-icon-2_jctm9t.png"
                alt="packing"
              />
              <div className="text-white lg:w-80">
                <h1 className="text text-lg">Fine Dining</h1>
                <p>
                  Immerse yourself in an unparalleled culinary journey. Indulge
                  in exquisite flavors, impeccable service, and an ambiance that
                  transcends dining.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              className="w-[350px] h-[350px] lg:w-[450px] lg:h-[450px]"
              src="https://res.cloudinary.com/dpzhezt6x/image/upload/v1692608741/service-image_spjc55.png"
              alt=""
            />
          </div>

          <div className="">
            <div>
              <img
                className="rounded-full w-24 h-24 bg-black hover:animate-bounce will-change-transform"
                src="https://res.cloudinary.com/dpzhezt6x/image/upload/v1692608739/s-icon-3_cldwc2.png"
                alt="packing"
              />
              <div className="text-white lg:w-80">
                <h1 className="text text-lg">Outdoor Catering</h1>
                <p>
                  Elevate your events with our delectable cuisine. From weddings
                  to corporate gatherings, let us cater to your culinary needs.
                </p>
              </div>
            </div>
            <div className="pt-5">
              <img
                className="rounded-full w-24 h-24 bg-black hover:animate-bounce will-change-transform"
                src="https://res.cloudinary.com/dpzhezt6x/image/upload/v1692608740/s-icon-4_npj9yk.png"
                alt="packing"
              />
              <div className="text-white lg:w-80 ">
                <h1 className="text-lg text">Banquets Hall</h1>
                <p>
                  Elevate your events with our spacious and elegant banquet
                  hall. Perfect for weddings, parties, and corporate gatherings.
                  Exceptional service guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
