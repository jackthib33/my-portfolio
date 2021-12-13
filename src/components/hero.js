import './styles.css';
import React from "react";
import { Container } from 'react-bootstrap';
import HomeCarousel from './carousel';

function Hero() {
  return (
    <Container className="hero, p-0" fluid p-0>
        <div classname="heroBlock">
          dvcmsd;fmsd
          </div>
       
        <HomeCarousel/>
        <h1 className="heroTitle customFont">Hello<br/> If You Like What You See Say Hi!</h1>
    </Container>
 
  );
}


export default Hero;