import { useState } from "react";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { FaShoppingBag } from "react-icons/fa";
import "./Navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen((click) => !click);
  };
  return (
    <>
      <nav className="nav-bar">
        {/* Navigation buttons (hamburger & cart) */}
        <div className="px-2">
          <button
            className="nav__hamburger"
            onClick={handleMenuClick}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <HiX className="nav__icon cross" />
            ) : (
              <HiMenuAlt2 className="nav__icon bars" />
            )}
          </button>
        </div>
        {/* Mobile mavigation menu */}
        <ul className={menuOpen ? "nav__menu-mobile show" : "nav__menu-mobile"}>
          <li className="nav__item-mobile">
            <a href="/#" className="nav-link-mobile">
              Shop
            </a>
          </li>
          <li className="nav__item-mobile">
            <a href="/#" className="nav-link-mobile">
              About Us
            </a>
          </li>
          <li className="nav__item-mobile">
            <a href="/#" className="nav-link-mobile">
              Contact
            </a>
          </li>
        </ul>
        {/* Desktop navigation menu */}
        <ul className="nav__menu-desktop">
          <li class="nav__item-desktop">
            <a href="/#" className="nav-link-desktop text-decoration-none">
              Shop
            </a>
          </li>
          <li class="nav__item-desktop">
            <a href="/#" className="nav-link-desktop text-decoration-none">
              About Us
            </a>
          </li>
          <li class="nav__item-desktop">
            <a href="/#" className="nav-link-desktop text-decoration-none">
              Contact Us
            </a>
          </li>
        </ul>
        {/* TGIN LOGO */}
        <div>
          <a href="/#" className="link-dark">
            <h1 className="logo" aria-label="TGIN Logo">
              t<span>g</span>in
            </h1>
          </a>
        </div>
        {/* Shopping cart button */}
        <button
          className={menuOpen ? "nav__cart dark" : "nav__cart"}
          aria-label="Open shopping cart"
        >
          <FaShoppingBag className="nav__icon" />
          <span>0</span>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
