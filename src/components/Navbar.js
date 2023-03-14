import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { FaShoppingBag } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClick = () => {
    setNavbarOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="navbar">
        <button className="toggle-menu" onClick={handleClick}>
          {navbarOpen ? (
            <RxCross1 className="nav-icon" />
          ) : (
            <RxHamburgerMenu className="nav-icon" />
          )}
        </button>
        <button className="toggle-cart">
          <FaShoppingBag className="nav-icon" />
        </button>
        <ul className={`nav-menu${navbarOpen ? " show-menu" : ""}`}>
          <li className="nav-item">
            <a href="/#" className="nav-link">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
