import React from "react";
import "./Testimonials.scss";
import { Row, Col } from "react-bootstrap";
import { IKImage } from "imagekitio-react";

const urlEndpoint = " https://ik.imagekit.io/p6ax2eh8/";

function Testimonials() {
  return (
    <div id="testimonials">
      <p className="testimonials__header">
        Check out what the community is saying about TGIN products
      </p>
      <div className="testimonials__grid">
        {/* Testimonials One */}
        <Row xs={1} md={2} xl={4} className="g-0">
          <Col>
            <IKImage
              urlEndpoint={urlEndpoint}
              src="https://ik.imagekit.io/p6ax2eh8/TGIN_Landing_Page_Images/woman-pink-bg.png"
              alt="A woman with a pink background"
              transformation={[
                {
                  height: 360,
                  width: 360,
                },
              ]}
              className="testimonials__img"
            />
          </Col>
          <Col className="testimonials__col testimonials__col--orange">
            <p className="testimonials__txt">
              “The Honey Miracle Hair Mask is truly outstanding! It leaves my
              hair feeling soft and hydrated for days afterwards. It's
              definitely my favorite deep conditioner!”
            </p>
            <span className="testimonials__name">-Priscilla A.</span>
          </Col>
          {/* Testimonials Two */}
          <Col className="order-md-last">
            <IKImage
              urlEndpoint={urlEndpoint}
              src="https://ik.imagekit.io/p6ax2eh8/TGIN_Landing_Page_Images/woman-blue-bg.png"
              alt="A woman with a blue background"
              transformation={[
                {
                  height: 360,
                  width: 360,
                },
              ]}
              className="testimonials__img"
            />
          </Col>
          <Col
            className="order-xl-last testimonials__col
              testimonials__col--pink "
          >
            <p className="testimonials__txt">
              “Detangling my 3a curls is made so much easier with the rose water
              leave-in! It's lightweight and won't weigh my hair down, plus it
              smells absolutely amazing!”
            </p>
            <span className="testimonials__name">-Sondra B.</span>
          </Col>
        </Row>
        {/* Testimonials Three */}
        <Row xs={1} md={2} xl={4} className="g-0">
          <Col>
            <IKImage
              urlEndpoint={urlEndpoint}
              src="https://ik.imagekit.io/p6ax2eh8/TGIN_Landing_Page_Images/woman-green-bg-2.png"
              alt="A woman with a green background"
              transformation={[
                {
                  height: 360,
                  width: 360,
                },
              ]}
              className="testimonials__img"
            />
          </Col>
          <Col className=" order-xl-first testimonials__col testimonials__col--orange">
            <p className="testimonials__txt">
              “The Miracle RepaiRx shampoo is extraordinary. It cleanses my
              scalp thoroughly without removing any of my natural oils, and it's
              also gentle enough for my 4c colored-treated hair.”
            </p>
            <span className="testimonials__name">-Naomi J.</span>
          </Col>
          {/* Testimonials Four */}
          <Col className="order-md-last">
            <IKImage
              urlEndpoint={urlEndpoint}
              src="https://ik.imagekit.io/p6ax2eh8/TGIN_Landing_Page_Images/woman-green-bg-1.png"
              alt="A woman with a green background"
              transformation={[
                {
                  height: 360,
                  width: 360,
                },
              ]}
              className="testimonials__img"
            />
          </Col>
          <Col className="testimonials__col testimonials__col--pink">
            <p className="testimonials__txt">
              “I love tgin's Curl Bomb Moisturizing Styling Gel! It gave my
              curls such definition and the hold is incredible. Even after a
              week of wearing a wash-and-go style, my curls still look great!”
            </p>
            <span className="testimonials__name">-Traci K.</span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Testimonials;
