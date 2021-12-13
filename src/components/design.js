import "./styles.css";
import React from "react";
import Gallery from "react-photo-gallery";
import { designImages } from "./designImages";
import { Row, Col, Image, Container, MenuItem } from "react-bootstrap";
import DesignGallery from "./designGallery";


function Design2() {
  return (
    <div style={{ marginTop: "10rem" }}>
      <Container Fluid>
        <h1 className="customFont recent">Digitial</h1>
      </Container>
      
      <DesignGallery/>
       
    </div>
  );
}

export default Design2;
