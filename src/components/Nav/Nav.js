import React, { useState } from "react";
import "./nav.scss";
import Logo from "../../images/logo.svg";
import Hamburger from "../../images/icon-hamburger.svg";
import Close from "../../images/icon-close.svg";

function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="Nav">
      <div className="Nav__logo-wrapper">
        <img src={Logo} alt="logo" />
      </div>
      <div className="Nav__desktop-list">
        <div className="Nav__desktop-item">home</div>
        <div className="Nav__desktop-item">shop</div>
        <div className="Nav__desktop-item">about</div>
        <div className="Nav__desktop-item">contact</div>
      </div>
      <div className="Nav__mobile-menu">
        <div
          className={
            mobileMenu
              ? "Nav__black-screen Nav__black-screen--show"
              : "Nav__black-screen"
          }
          onClick={() => {
            setMobileMenu(false);
          }}
        ></div>
        <div
          className="Nav__hamburger-wrapper"
          onClick={() => {
            setMobileMenu((prevValue) => !prevValue);
          }}
        >
          <img src={mobileMenu ? Close : Hamburger} alt="hamburger" />
        </div>
        <div
          className={
            mobileMenu
              ? "Nav__mobile-list Nav__mobile-list--active"
              : "Nav__mobile-list"
          }
        >
          <div className="Nav__mobile-item">home</div>
          <div className="Nav__mobile-item">shop</div>
          <div className="Nav__mobile-item">about</div>
          <div className="Nav__mobile-item">contact</div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
