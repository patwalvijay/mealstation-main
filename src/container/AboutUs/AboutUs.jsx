import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          At Meal Station, we are more than just a place to dine; we are a
          culinary destination designed to delight your senses and nourish your
          soul. Our journey began with a simple yet profound idea – to create a
          haven where extraordinary food, exceptional service and a welcoming
          atmosphere converge. Meal Stations is the realization of a dream
          shared by a team of passionate food enthusiasts. We embarked on a
          mission to redefine the dining experience in Dehradun, inspired by a
          deep love for the art of cooking and a commitment to using the finest,
          locally sourced ingredients.
        </p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          The history of Meal Stations is a tale of passion, flavor, and a
          commitment to culinary excellence that spans generations. Established
          in 2021, we carry forward a legacy deeply rooted in the art of
          gastronomy. Our journey began when Gunjan Joshi Mahendru, a visionary
          with an unyielding love for food, set out to create a dining
          experience that would captivate the senses. Inspired by family recipes
          passed down through the ages and a desire to share these cherished
          flavors with the world, Gunjan Joshi Mahendru opened the doors of Meal
          Stations.
        </p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
