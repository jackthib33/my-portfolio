import "./styles.css";
import React from "react";
import PaintingGallery from "./paintingGallery";
import Footer from "./footer";
import { Row, Col, Image, Container, MenuItem } from "react-bootstrap";

function Painting2() {
  return (
    <div style={{ marginBottom: "10rem", marginTop: "7rem" }}>
      <Container Fluid>
        <h1 className="customFont recent">Painting</h1>
      </Container>
      <PaintingGallery />
    </div>
  );
}

export default Painting2;
