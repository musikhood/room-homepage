import React from "react";
import "./footer.scss";
import DarkImage from "../../images/image-about-dark.jpg";
import LightImage from "../../images/image-about-light.jpg";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__image-wrapper Footer__image-wrapper--1"></div>
      <div className="Footer__about">
        <div className="Footer__about-wrapper">
          <h2>About our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </div>
      <div className="Footer__image-wrapper Footer__image-wrapper--2"></div>
    </div>
  );
}

export default Footer;
