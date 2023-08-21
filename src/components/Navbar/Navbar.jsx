import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <Link to="/">
          <li className="p__opensans">
            <a>Home</a>
          </li>
        </Link>
        <Link to="/about">
          <li className="p__opensans">
            <a>About</a>
          </li>
        </Link>
        <Link to="/menu">
          <li className="p__opensans">
            <a>Menu</a>
          </li>
        </Link>
        {/* <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li> */}
        <Link to="/contact">
          <li className="p__opensans">
            <a>Contact</a>
          </li>
        </Link>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Registration
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <Link to="/">
                <li>
                  <a onClick={() => setToggleMenu(false)}>Home</a>
                </li>
              </Link>
              <Link to="/about">
                <li>
                  <a onClick={() => setToggleMenu(false)}>About</a>
                </li>
              </Link>
              <Link to="/menu">
                <li>
                  <a onClick={() => setToggleMenu(false)}>Menu</a>
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <a onClick={() => setToggleMenu(false)}>Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
