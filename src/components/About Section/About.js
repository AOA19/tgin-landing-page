import React from "react";
import "./About.scss";
import { IKImage } from "imagekitio-react";

const urlEndpoint = " https://ik.imagekit.io/p6ax2eh8/";

function About() {
  return (
    <div
      className="px-5 d-md-flex flex-row-reverse align-items-md-center  "
      id="about"
    >
      <div className="about__img-container">
        <IKImage
          urlEndpoint={urlEndpoint}
          src="https://ik.imagekit.io/p6ax2eh8/TGIN_Landing_Page_Images/about_img.png"
          className="about__img"
        />
      </div>
      <div className="about__txt-container">
        <p className="about__txt">
          TGIN was founded by Chris-Tia Donaldson in 2011 with the mission of
          providing natural hair and skin care products that cater to the needs
          of women of color. Tgin's commitment to natural ingredients and their
          dedication to providing safe and effective products has helped them
          become one of the most popular beauty brands within the natural hair
          and skin care communities. They are passionate about creating products
          that give their customers the confidence to embrace their unique
          beauty and be proud of it.
        </p>
      </div>
    </div>
  );
}

export default About;
