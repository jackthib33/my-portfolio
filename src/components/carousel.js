import "./styles.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
  return (
    <Carousel className="heroCarousel">
      <Carousel.Item>
        <img
          className="  img-responsive center-block w-100 p-0"
          src="https://ik.imagekit.io/jackthibodeau/Photography_/000412970029_4lQxuYe-Q.jpg?updatedAt=1637095278274"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" img-responsive center-block w-100 p-0"
          src="https://ik.imagekit.io/jackthibodeau/Photography_/000412970031_VR2_Redk8.jpg?updatedAt=1637095278192"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" img-responsive center-block w-100 p-0"
          src="https://ik.imagekit.io/jackthibodeau/Photography_/000412970030_llq18xjpW.jpg?updatedAt=1637095278123z"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" img-responsive center-block w-100 p-0"
          src="https://ik.imagekit.io/jackthibodeau/Photography_/3_fIkNO5OT9.jpg?updatedAt=1637101810453"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" img-responsive center-block w-100 p-0"
          src="https://ik.imagekit.io/jackthibodeau/Painting/covidhartmans-13_wmGvAmp4G8.jpg?updatedAt=1636488171183"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
