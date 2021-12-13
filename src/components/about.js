import './styles.css';
import React from "react";
import pic from "./jackj.jpeg"
import Contact from "./contact"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function About2() {
  return (
    
      <div>
        <img className="aboutPic" src={pic} height="400rem" />
        <div className="aboutText">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec nisi purus. Curabitur vel mi eget arcu pretium varius. Mauris non dolor ac tellus sodales volutpat at ut est. Sed erat enim, fermentum id fringilla ut, condimentum sed arcu. Maecenas viverra tortor ut eros dictum cursus. Maecenas massa neque, tincidunt sit amet dictum quis, porta in nulla. Donec tristique congue odio, non imperdiet purus tincidunt ac.</p>
        </div>
        <Contact/>
      </div>
 
  );
}


export default About2;