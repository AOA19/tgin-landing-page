import React from "react";
import "./Collections.scss";
import { IKImage } from "imagekitio-react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

const urlEndpoint = " https://ik.imagekit.io/p6ax2eh8/";

function Collections() {
  return (
    <div id="collections">
      <Row sm={1} md={1} lg={3}>
        <Col className="g-0 d-flex justify-content-center ">
          <Link
            to="products"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
            className="collection__link"
          >
            <IKImage
              urlEndpoint={urlEndpoint}
              src="https://ik.imagekit.io/p6ax2eh8/TGIN_Landing_Page_Images/moisture-collection%20.png"
              className="collection__img"
            />
            <div className="collection__overlay">
              <p className="collection__name">Moist Collection</p>
            </div>
          </Link>
        </Col>
        <Col className="g-0 d-flex justify-content-center">
          <Link
            to="products"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
            className="collection__link"
          >
            <IKImage
              urlEndpoint={urlEndpoint}
              src="https://ik.imagekit.io/p6ax2eh8/TGIN_Landing_Page_Images/roses-collection%20.png"
              className="collection__img"
            />
            <div className="collection__overlay">
              <p className="collection__name">Curls N Roses Collection</p>
            </div>
          </Link>
        </Col>
        <Col className="g-0 d-flex justify-content-center">
          <Link
            to="products"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
            className="collection__link"
          >
            <IKImage
              urlEndpoint={urlEndpoint}
              src="https://ik.imagekit.io/p6ax2eh8/TGIN_Landing_Page_Images/miracle-repair-collection%20.png"
              className="collection__img"
            />
            <div className="collection__overlay">
              <p className="collection__name">Miracle RepaiRx Collection</p>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Collections;
