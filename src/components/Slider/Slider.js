import React, { useState } from "react";
import "./slider.scss";
import data from "../../data/data.json";
import "../../images/desktop-image-hero-1.jpg";
import "../../images/desktop-image-hero-2.jpg";
import "../../images/desktop-image-hero-3.jpg";
import "../../images/mobile-image-hero-1.jpg";
import "../../images/mobile-image-hero-2.jpg";
import "../../images/mobile-image-hero-3.jpg";
import arrow from "../../images/icon-arrow.svg";
import left from "../../images/icon-angle-left.svg";
import right from "../../images/icon-angle-right.svg";

function Slider() {
  const [width, setWidth] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 500) {
      setWidth(true);
    } else {
      setWidth(false);
    }
  });

  let amount = 0;
  let amountOfSlides = data.length - 1;
  function moveSlide() {
    document.querySelectorAll(".Slider__images").forEach((item) => {
      item.style.transform = `translateX(${amount}%)`;
    });
    document.querySelectorAll(".Slider__info-slide").forEach((item) => {
      item.style.transform = `translateX(${amount}%)`;
    });
  }
  function next() {
    amount -= 100;
    if (amount < -100 * amountOfSlides) amount = 0;
    moveSlide();
  }
  function prev() {
    amount += 100;
    if (amount > 0) amount = -100 * amountOfSlides;
    moveSlide();
  }

  return (
    <div className="Slider">
      <div className="Slider__carousel">
        {data.map((pictures, index) => (
          <div
            key={index}
            className="Slider__images"
            style={
              width
                ? { backgroundImage: `url(${pictures.path2})` }
                : { backgroundImage: `url(${pictures.path})` }
            }
          ></div>
        ))}
        <div className="Slider__arrows2">
          <div className="Slider__btn" onClick={prev}>
            <img src={left} alt="" />
          </div>
          <div className="Slider__btn" onClick={next}>
            <img src={right} alt="" />
          </div>
        </div>
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
          <div className="Slider__btn" onClick={prev}>
            <img src={left} alt="" />
          </div>
          <div className="Slider__btn" onClick={next}>
            <img src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
