import React from "react";
import "./MenuHero.css";
import { Footer } from "../container";

const menucard = [
  {
    img: "https://res.cloudinary.com/dpzhezt6x/image/upload/v1692638767/menu-image-11_k0yncc.jpg",
    title: "Kali Chiken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, atque dolore",
    price: "₹250.00",
  },
  {
    img: "https://res.cloudinary.com/dpzhezt6x/image/upload/v1692638767/menu-image-11_k0yncc.jpg",
    title: "Kali Chiken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, atque dolore",
    price: "₹250.00",
  },
  {
    img: "https://res.cloudinary.com/dpzhezt6x/image/upload/v1692638767/menu-image-11_k0yncc.jpg",
    title: "Kali Chiken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, atque dolore",
    price: "₹250.00",
  },
  {
    img: "https://res.cloudinary.com/dpzhezt6x/image/upload/v1692638767/menu-image-11_k0yncc.jpg",
    title: "Kali Chiken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, atque dolore",
    price: "₹250.00",
  },
  {
    img: "https://res.cloudinary.com/dpzhezt6x/image/upload/v1692638767/menu-image-11_k0yncc.jpg",
    title: "Kali Chiken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, atque dolore",
    price: "₹250.00",
  },
  {
    img: "https://res.cloudinary.com/dpzhezt6x/image/upload/v1692638767/menu-image-11_k0yncc.jpg",
    title: "Kali Chiken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, atque dolore",
    price: "₹250.00",
  },
  {
    img: "https://res.cloudinary.com/dpzhezt6x/image/upload/v1692638767/menu-image-11_k0yncc.jpg",
    title: "Kali Chiken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, atque dolore",
    price: "₹250.00",
  },
  {
    img: "https://res.cloudinary.com/dpzhezt6x/image/upload/v1692638767/menu-image-11_k0yncc.jpg",
    title: "Kali Chiken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, atque dolore",
    price: "₹250.00",
  },
];

const MenuHero = () => {
  return (
    <>
      <div className='bg-[url("https://res.cloudinary.com/dpzhezt6x/image/upload/v1692638192/banner-image-2_xsxutp.jpg")] w-full bg-cover   h-[450px]'>
        <div className="flex items-center justify-center flex-col lg:pt-[10%] pt-[40%]  gap-4 ">
          <h1 className="text-[20px] text trcking-widest">
            DELICIOUS & AMAZING
          </h1>
          <h1 className="text-[52px] text-white">Our Menu</h1>
        </div>
      </div>

      <div className="bg-[url('https://res.cloudinary.com/dpzhezt6x/image/upload/v1692563273/bg_f17kvb.png')] w-full scrollbar-hide">
        <div className="flex flex-col justify-center items-center text-center tracking-widest pt-10 lg:pt-10 lg:px-[18%]">
          <h1 className="text lg:text-[14px]">SPECIAL OFFER</h1>
          <h1 className="text-white mt-5 lg:text-[44px] text-3xl">
            Best Special Menu
          </h1>
        </div>
        <div className="flex flex-wrap p-10 gap-10  justify-center ">
          {menucard.map((item) => {
            return (
              <>
                <div className="flex flex-col items-center text-center gap-3 w-72 h-72 mb-32 ">
                  <img
                    className="w-62 h-62 rounded-xl hover:shadow-gray-100 hover:shadow-md transition-shadow duration-300 ease-in-out "
                    src={item.img}
                    alt="menu_item"
                  />
                  <h1 className="text-white">{item.title}</h1>
                  <p className="text-white">{item.description}</p>
                  <p className="text">{item.price}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center gap-5 lg:mt-10">
          <div className="text text-white w-72 h-86 text-center items-center flex flex-col gap-3 lg:pt-14">
            <div className="flex flex-col gap-2">
              <h1 className="text-[42px]">Private Events</h1>
              <p>
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been the industrys.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div>Booking Request</div>
              <a className="text text-[30px]" href="tel: +8630385448">
                +91 8630385448
              </a>
            </div>
            <a href="tel: +8630385448">
              <button className="w-40 text-black px-5 py-2 hover:text-white bg-[#8b6d24ba] font-bold ">
                Call Now
              </button>
            </a>
          </div>

          <div>
            <img
              className="w-72 h-86"
              src="https://res.cloudinary.com/dpzhezt6x/image/upload/v1692643845/featured-8_f1te4k.jpg"
              alt="reserved"
            />
          </div>
          <div>
            <img
              className="w-72 h-86"
              src="https://res.cloudinary.com/dpzhezt6x/image/upload/v1692643845/featured-9_mgzaet.jpg"
              alt="reserved"
            />
          </div>
        </div>

        <div className="flex flex-wrap p-10 gap-10  justify-center mt-10 ">
          {menucard.map((item) => {
            return (
              <>
                <div className="flex flex-col items-center text-center gap-3 w-72 h-72 mb-32 ">
                  <img
                    className="w-62 h-62 rounded-xl hover:shadow-gray-100 hover:shadow-md transition-shadow duration-300 ease-in-out "
                    src={item.img}
                    alt="menu_item"
                  />
                  <h1 className="text-white">{item.title}</h1>
                  <p className="text-white">{item.description}</p>
                  <p className="text">{item.price}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuHero;
