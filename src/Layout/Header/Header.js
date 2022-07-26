import React from "react";
import { Nav, Slider } from "../../components";
import "./header.scss";

function Header() {
  return (
    <div className="Header">
      <Nav />
      <Slider />
    </div>
  );
}

export default Header;
