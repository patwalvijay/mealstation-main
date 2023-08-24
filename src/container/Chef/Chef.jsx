import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding -mt-28">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Exceptional service is the heartbeat of our restaurant.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          At The Meal Station, our philosophy is grounded in a deep appreciation
          for the art of dining. We believe that food is more than sustenance;
          it's an experience that should elevate your senses and nourish your
          soul. Our core values reflect our commitment to delivering this
          exceptional experience:{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p> Gunjan Joshi Mahendru</p>
        <p className="p__opensans">Chef & Founder</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
