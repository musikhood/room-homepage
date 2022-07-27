import React from "react";
import "./slider.scss";
import data from "../../data/data.json";
import "../../images/desktop-image-hero-1.jpg";
import "../../images/desktop-image-hero-2.jpg";
import "../../images/desktop-image-hero-3.jpg";
import arrow from "../../images/icon-arrow.svg";
import left from "../../images/icon-angle-left.svg";
import right from "../../images/icon-angle-right.svg";

function Slider() {
  return (
    <div className="Slider">
      <div className="Slider__carousel">
        {data.map((pictures, index) => (
          <div
            key={index}
            className="Slider__images"
            style={{ backgroundImage: `url(${pictures.path})` }}
          ></div>
        ))}
      </div>
      <div className="Slider__info">
        {data.map((info, index) => (
          <div key={index} className="Slider__info-slide">
            <div className="Slider__info-wrapper">
              <h1>{info.title}</h1>
              <p>{info.about}</p>
              <div className="Slider__arrow">
                Shop Now <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        ))}
        <div className="Slider__arrows">
          <div className="Slider__btn">
            <img src={left} alt="" />
          </div>
          <div className="Slider__btn">
            <img src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
