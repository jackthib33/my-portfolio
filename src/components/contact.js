import "./styles.css";
import React from "react";
import instagram from "./Images/nstagram_icon.png";
import youtube from "./Images/youtube_icon.png";
import phone from "./Images/local_phone_icon.png";
import email from "./Images/email_icon.png";

const Mailto = ({ email, subject = "", body = "", children }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};


function Contact() {
  return (
    <div>
      <ul className="contact">
        <li className="contactItem">
          <img className="contactIcon" src={phone} />
          <p>303-253-5988</p>
        </li>
        <li>
          <Mailto
            email="jackthibodeau@gmail.com"
            subject="How Can I Help You"
            body="Hello  Jack"
          >
            <img className="contactIcon" src={email} />
          </Mailto>
          ,
        </li>
        <li>
          <img className="contactIcon" src={youtube} onClick={() => window.open( 'https://www.youtube.com/channel/UCEqo_iWf0tsL6tVv4Na7Jcw/videos')} />
        </li>
        <li>
          <img className="contactIcon" src={instagram} onClick={() => window.open( 'https://www.instagram.com/jackthib33/?hl=en')}  />
        </li>
      </ul>
    </div>
  );
}

export default Contact;
