import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Footer.scss";
import { BsInstagram, BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import {
  Row,
  Col,
  Container,
  Form,
  FloatingLabel,
  Button,
  Alert,
} from "react-bootstrap";

function Footer() {
  // const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="footer">
      <Container>
        <div className="footer__subscribe">
          <h3 className="footer__headers">Subscribe To Our Newsletter</h3>
          <Form onsubmit={handleSubmit} className="footer__form">
            {/* Display submitted message */}
            {submitted && (
              <Alert variant="success">
                You are now subscribed to our newsletter!
              </Alert>
            )}
            <FloatingLabel controlId="floatingInput" label="Email Address">
              <Form.Control
                type="email"
                placeholder="email@example.com"
              ></Form.Control>
            </FloatingLabel>
            <Button
              variant="primary"
              type="submit"
              size="lg"
              className="signupBtn"
            >
              Sign Up
            </Button>
          </Form>
        </div>
        <Container>
          <Row>
            {/* Footer Nav links */}
            <Col sm={6} xl={4} className="footer__nav-links">
              <h1 className="footer__logo" aria-label="TGIN Logo">
                t<span>g</span>in
              </h1>
              <div className="footer__navbar d-flex justify-content-center">
                {/* Left side of nav */}
                <ul className="footer__menu footer__menu-left">
                  <li className="footer__nav-item">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="footer__nav-link text-decoration-none"
                    >
                      About
                    </Link>
                  </li>
                  <li className="footer__nav-item">
                    <Link
                      to="testimonials"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="footer__nav-link text-decoration-none"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li className="footer__nav-item">
                    <Link
                      to="ingredients"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="footer__nav-link text-decoration-none"
                    >
                      Ingredients
                    </Link>
                  </li>
                </ul>
                {/* Right side of nav */}
                <ul className="footer__menu footer__menu-right">
                  <li className="footer__nav-item">
                    <Link
                      to="best-sellers"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="footer__nav-link text-decoration-none"
                    >
                      Best Sellers
                    </Link>
                  </li>
                  <li className="footer__nav-item">
                    <Link
                      to="collections"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="footer__nav-link text-decoration-none"
                    >
                      Collections
                    </Link>
                  </li>
                  <li className="footer__nav-item">
                    <Link
                      to="products"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="footer__nav-link text-decoration-none"
                    >
                      Products
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            {/* Footer Socials */}
            <Col className="footer__socials">
              <h3 className="footer__headers">Join the Community</h3>
              <div className="socials d-flex justify-content-evenly">
                {/* Instagram icon */}
                <a
                  href="https://www.instagram.com/tginatural"
                  aria-label="Vist our Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram className="social-icon" />
                </a>
                {/* Twitter Icon */}
                <a
                  href="https://twitter.com/tginofficial"
                  aria-label="Vist our Twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter className="social-icon" />
                </a>
                {/* Youtube icon  */}
                <a
                  href="https://www.youtube.com/user/thankgodimnatural"
                  aria-label="Vist our Youtube channel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsYoutube className="social-icon" />
                </a>
                {/* Facebook icon */}
                <a
                  href="https://www.facebook.com/tginatural"
                  aria-label="Vist our Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook className="social-icon" />
                </a>
              </div>
            </Col>
            {/* Footer Contact */}
            <Col className="footer__contact text-center">
              <h3 className="footer__headers">Contact Us</h3>
              <p className="address">
                2021 W. Fulton St. Suite K106 <br /> Chicgao, IL 60612
              </p>
              <p className="phoneNum">customerservice@tginnatural.com</p>
            </Col>
          </Row>
        </Container>
        {/* Footer credit */}
        <div className="footer__credit text-center">
          <p className="credit mb-0">
            Desgined and Developed By
            <a
              href="https://github.com/AOA19/tgin-landing-page"
              aria-label="Vist github repo"
              target="_blank"
              rel="noreferrer"
              className="github-link ps-1"
            >
              AOA19
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
