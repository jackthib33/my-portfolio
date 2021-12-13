import "./styles.css";
import React from "react";
import { Container } from "react-bootstrap";
import HomeCarousel from "./carousel";

function HeroTwo() {
  return (
    <div className="heroTwo">
      <div className="heroTop">
      <div className="heroText customFontTwo">
        <h1>Hello.</h1>
      </div>
      <div className="heroTextTwo customFont">
        <h1>Take A look around and I hope you enjoy<br/> and check out the store</h1>
      </div>
      </div>
      <div className=" heroBlock">
        <HomeCarousel/>
      </div>
    </div>
  );
}

export default HeroTwo;
