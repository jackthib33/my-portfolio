import "./styles.css";
import React from "react";
import instagram from "./Images/nstagram_icon.png";
import youtube from "./Images/youtube_icon.png";
import phone from "./Images/local_phone_icon.png";
import email from "./Images/email_icon.png";
import { Row, Col, Image, Container, MenuItem } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Row>
            <Col md={2}>
          </Col>
          <Col md={2}>
          </Col>
        <Col md={1}>
          <Link to="https://github.com/Joeyryanbridges">
            <img className="footerIcon" src={phone} />
          </Link>
        </Col>
        <Col md={1}>
          <Link to="https://github.com/Joeyryanbridges">
            <img className="footerIcon" src={email} />
          </Link>
        </Col>
        <Col md={1}>
          <Link to="https://github.com/Joeyryanbridges">
            <img className="footerIcon" src={instagram} />
          </Link>
        </Col>
        <Col md={1}>
          <Link to="https://github.com/Joeyryanbridges">
            <img className="footerIcon" src={youtube} />
          </Link>
        </Col>
        <Col md={2}>
          </Col>
          <Col md={2}>
          </Col>
        
      </Row>
    </div>
  );
}

export default Footer;
