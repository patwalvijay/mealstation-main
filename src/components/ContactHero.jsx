import React from "react";
import GoogleMapReact from "google-map-react";
import { FindUs, Footer } from "../container";

const AnyReactComponent = ({ mealstation }) => <div>{mealstation}</div>;
const ContactHero = () => {
  const defaultProps = {
    center: {
      lat: 30.29876953501137,
      lng: 78.04620819581154,
    },
    zoom: 11,
  };
  return (
    <>
      <div className='bg-[url("https://res.cloudinary.com/dpzhezt6x/image/upload/v1692654951/banner-image-4_kx3bie.jpg")] w-full bg-cover   h-[450px]'>
        <div className="flex items-center justify-center flex-col lg:pt-[10%] pt-[40%]  gap-4 ">
          <h1 className="text-[20px] text">ANY QUERY ?</h1>
          <h1 className="text-[52px] text-white">Contact Us</h1>
        </div>
      </div>

      {/* ...map.... */}

      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.838357190875!2d78.04363327528498!3d30.29866300648162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092be3c585a179%3A0x41c4aebe6d7c8c50!2sMyPhotogenie%20Wedding%20Photographer%20In%20Dehradun!5e0!3m2!1sen!2sin!4v1692655146444!5m2!1sen!2sin"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}

      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={30.29876953501137}
            lng={78.04620819581154}
            text="My Location"
          />
        </GoogleMapReact>
      </div>

      <FindUs />
      <Footer />
    </>
  );
};

export default ContactHero;
