import "./styles.css";
import React from "react";
import HeroTwo from "./heroTwo";
import About2 from "./about";
import Hero from "./hero";
import { Row, Col, Image, Container, MenuItem } from "react-bootstrap";
import RecentWorks from "./RecentWorks";
import Dropdown from "react-bootstrap/Dropdown";
function Home() {
  return (
    <div>
      <HeroTwo />

      <Row>
        
      </Row>
      <Container style={{ marginTop: "2rem" }} fluid>
        <Col className="newShow customFont" sm={12} md={10}>
        
          <h1 className="customFont recent">Newest Show</h1>
        
        <Image
          className="newShowImage "
          src="https://ik.imagekit.io/jackthibodeau/Photography_/Untitled-1_qwnzTjrM5u.jpg?updatedAt=1638478426047"
        />
        </Col>
      </Container>
       
      
      <Container style={{ marginTop: "2rem" }} fluid>
        <Col className="homeBio customFont" sm={12} md={8}>
          <h1>
            Jack Thibbodeau Photgraphy Graphic Design Web Development and Fine
            Art Imagination is the key to painting. Without washing the brush,
            I'm gonna go right into some Van Dyke Brown, some Burnt Umber, and a
            little bit of Sap Green. I sincerely wish for you every possible joy
            life could bring. See. We take the corner of the brush and let it
            play back-and-forth. There we go.
          </h1>
        </Col>
      </Container>
      {/*<Container fluid>
        <Row className="homeIntro">
          <Col className="introOne" xs={6} md={7}>
            <Image
              style={{ maxWidth: "80vw" }}
              className=""
              src="https://ik.imagekit.io/jackthibodeau/Photography_/mix1_YGzReUIU8hl.jpg?updatedAt=1638393395776"
            />
          </Col>
          <Col xs={12} md={5}>
            <Image
              style={{ maxwidth: "20vw" }}
              src="https://ik.imagekit.io/jackthibodeau/Photography_/gunPortFinal_uS4Kh9jCu.jpg?updatedAt=1638393387600"
            />
          </Col>
        </Row>
      </Container>*/}

      {/*<Hero/>*/}
      <Container style={{ marginTop: "2rem" }} fluid>
        <Col className="newShow customFont" sm={12} md={12}>
        
          <h1 className="customFont recent">Newest Show</h1>
        
          <RecentWorks />
        </Col>
      </Container>
      <Row>
        
          <h1 className="customFont recent">Resent Artwork</h1>
        
      </Row>
      
      
      {/*!-- 
      <Container style={{marginTop: '10rem'}} fluid >
        <Row className="justify-content-md-center" xs={12}>
        <Col className="homeHeroOne" xs={3}>
          
        <Image src="https://ik.imagekit.io/jackthibodeau/Misc/HomeHeroPhoto_-p0n3h_eC.jpg?updatedAt=1637016274190" fluid />
        <h4 style={{ textAlign: "center" }}>Photography</h4>
        </Col>
        <Col className="homeHeroTwo" xs={3}>
        
        <Image src="https://ik.imagekit.io/jackthibodeau/Misc/HomeHeroPrint_HXLCw4WYE.jpg?updatedAt=1637016274373" fluid />
        <h4 style={{ textAlign: "center" }}>Print Making</h4>
        </Col>
        
        <Col className="homeHeroThree" xs={3}>
        
        <Image src="https://ik.imagekit.io/jackthibodeau/Misc/HomeHeroDesign_kBtrG6NAIOg.jpg?updatedAt=1637016274293" fluid />
        <h4 style={{ textAlign: "center" }}>Digitial Design</h4>
        </Col>
        <Col className="homeHeroThree" xs={3}>
        
        <Image src="https://ik.imagekit.io/jackthibodeau/Misc/HomeHeroDesign_kBtrG6NAIOg.jpg?updatedAt=1637016274293" fluid />
        <h4 style={{ textAlign: "center" }}>Digitial Design</h4>
        </Col>
        </Row>
       
        </Container>
      --!*/}
    </div>
  );
}

export default Home;
