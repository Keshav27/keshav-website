import React from "react";
import "./aboutme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Video from "../Images/video.mp4";

const Aboutme = () => {
  return (
    <div className="containerr">
      <div className="parent">
        <div className="aboutme">
          <div className="aboutme-left">
            <div className="aboutme-1">ABOUT ME</div>
            <div className="aboutme-2">
              Designing with passion for Problem Solving
            </div>
            <div className="aboutme-3">
              <a
                className="instagram"
                href="https://www.instagram.com/keshav_garg27/"
              >
                FOLLOW ME ON INSTAGRAM &nbsp;
              </a>
              <FontAwesomeIcon className="instagram-icon" icon={faInstagram} />
            </div>
          </div>
          <div className="info">
            I’ve always been passionate about pixels and design projects and
            haven’t stopped working and learning about new technologies . Other
            than sitting in from of my display I enjoy myself in casual sports,
            such as riding bike or playing football with friends.
            <br />
            <br />
            I'm grateful that my job allows me to work from anywhere. I’m active
            on Instagram where I share most of the and all info about my
            upcoming projects. <br />
            <br />I also like sharing my experiences on instagram.
          </div>
        </div>
      </div>
      <video className="back-video" loop autoPlay muted>
        <source src={Video} type="video/mp4" />
        <source src={Video} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Aboutme;
