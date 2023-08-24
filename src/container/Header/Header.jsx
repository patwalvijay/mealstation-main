import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";
import TypewriterComponent from "typewriter-effect";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1 lg:h-64 h-36">
        {" "}
        <TypewriterComponent
          options={{
            autoStart: true,
            loop: true,
            delay: 50,
            strings: "The Key To Fine Dining",
          }}
        />
      </h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        At The Meal Station, we believe in more than just nourishing appetites;
        we nourish souls. Our welcoming atmosphere and impeccable service ensure
        that every visit is a memorable occasion.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
