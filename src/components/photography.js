import "./styles.css";
import React from "react";
import Gallery from "react-photo-gallery";
import RampageGallery from "./RampageGallery";
import StudioGallery from "./studioPhotography";
import { Row, Col, Image, Container, MenuItem } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function photography2() {
  return (
    <div style={{marginTop: '7rem'}}>
      <Container Fluid>
        <h1 className="customFont recent">Studio</h1>
      </Container>
      <StudioGallery />
      <Container Fluid>
        <h1 className="customFont recent">Mountain Biking</h1>
      </Container>
      <RampageGallery />

      <Container Fluid>
        <h1 className="customFont recent">Film</h1>
      </Container>
      <RampageGallery />
    </div>
  );
}

export default photography2;
