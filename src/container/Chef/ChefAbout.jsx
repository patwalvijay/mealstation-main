import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const ChefAbout = () => (
  <div className="app__bg app__wrapper section__padding pt-[1500px] lg:pt-[500px]">
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
            Exceptional Service Is The Heartbeat Of Our Restaurant.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          At The Meal Station, Our Philosophy Is Grounded In A Deep Appreciation
          For The Art Of Dining. We Believe That Food Is More Than Sustenance;
          It's An Experience That Should Elevate Your Senses And Nourish Your
          Soul. Our Core Values Reflect Our Commitment To Delivering This
          Exceptional Experience:{" "}
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

export default ChefAbout;
