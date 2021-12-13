import './styles.css';
import React from "react";
import Gallery from "react-photo-gallery";
import { printmakingImages } from "./printmakingImages";
import { Row, Col, Image, Container, MenuItem } from "react-bootstrap";

function PrintMaking2() {
  return (

    <div> 
    <Container Fluid>
        <h1 className="customFont recent">Studio</h1>
      </Container>
    <Gallery photos={printmakingImages} direction={"column"} />

    
     
            
      </div>
 
  );
}


export default PrintMaking2;