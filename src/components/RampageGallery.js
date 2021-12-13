import React from "react";
import ReactDOM from "react-dom";
import { rampageImages } from "./RampageImages";
import { Row, Col, Image, Container, MenuItem } from "react-bootstrap";

import "./styles.css";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <Col  xs={12} md={6} lg={4}
      className={`designConts  fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </Col>
  );
}

function RampageGallery() {
  return (
    <Container>
      <Row style={{ width: "100%" }} className=" ">
        
          {rampageImages.map((src) => (
              <FadeInSection>
            <Image className="designImages" src={src} fluid />
            </FadeInSection>
          ))}
        
      </Row>
    </Container>
  );
}

export default RampageGallery;
