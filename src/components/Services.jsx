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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam, voluptate fugiat rem voluptatem quidem earum dicta
                  iusto accusantium magnam in.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam, voluptate fugiat rem voluptatem quidem earum dicta
                  iusto accusantium magnam in.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam, voluptate fugiat rem voluptatem quidem earum dicta
                  iusto accusantium magnam in.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam, voluptate fugiat rem voluptatem quidem earum dicta
                  iusto accusantium magnam in.
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
