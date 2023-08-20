import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.scss";

function Navbar() {
  // State variable for navbar
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => setMenuOpen(!menuOpen);
  //Close menu
  const closeMenu = () => setMenuOpen(false);

  // Close mobile nav menu on resize for larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <nav className="nav__bar">
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
        <ul className={menuOpen ? "nav__menu show" : "nav__menu"}>
          <div className="text-center d-lg-flex align-items-lg-center py-3 px-lg-3">
            <NavDropdown title="Shop" className="nav__dropdown">
              {/* Best Sellers dropdown */}
              <NavDropdown.Item className="nav__item">
                <Link
                  to="best-sellers"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={400}
                  className="nav__link"
                  onClick={closeMenu}
                >
                  Best Sellers
                </Link>
              </NavDropdown.Item>
              {/* Collections dropdown */}
              <NavDropdown.Item className="nav__item">
                <Link
                  to="collections"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={400}
                  className="nav__link"
                  onClick={closeMenu}
                >
                  Collections
                </Link>
              </NavDropdown.Item>
              {/* Products dropdown */}
              <NavDropdown.Item className="nav__item">
                <Link
                  to="products"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={400}
                  className="nav__link"
                  onClick={closeMenu}
                >
                  Products
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="text-center d-lg-flex align-items-lg-center py-3 px-lg-3 ">
            <NavDropdown title="About" className="nav__dropdown">
              {/* About TGIN */}
              <NavDropdown.Item className="nav__item">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                  className="nav__link"
                  onClick={closeMenu}
                >
                  About TGIN
                </Link>
              </NavDropdown.Item>
              {/* Ingredients */}
              <NavDropdown.Item className="nav__item">
                <Link
                  to="ingredients"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                  className="nav__link"
                  onClick={closeMenu}
                >
                  Ingredients
                </Link>
              </NavDropdown.Item>
              {/* Testimonals */}
              <NavDropdown.Item className="nav__item">
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                  className="nav__link"
                  onClick={closeMenu}
                >
                  Testimonals
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          {/* Contact Link */}
          <li className="nav__item-contact py-3 px-lg-3">
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={50}
              duration={300}
              className="contact-link"
              onClick={closeMenu}
              tabIndex={0}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* TGIN LOGO */}
        <div>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={300}
            className="link-dark"
          >
            <h1 className="logo" aria-label="TGIN Logo">
              t<span>g</span>in
            </h1>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
