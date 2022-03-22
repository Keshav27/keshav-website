import React from "react";
import image from "./keshav.png";
import "./home.css";
const Home = () => {
  return (
    <div className="home-parent">
      <div className="home-parent-left">
        <div className="front">
          <div className="hello">Hello, it's me</div>
          <div className="name">
            Keshav<span class="dot vf">.</span>
          </div>
        </div>
        <div className="back">
          <div className="des">Software</div>
          <div className="des">Developer</div>
        </div>
        <div className="about-me">
          I am a Software developer with industry experience building websites
          and web applications. I specialize in React JS and have professional
          experience working with C# and Node JS. I have a good knowledge of
          Data Structure, Algorithm and Core Java. I also have experience
          working with Azure, MySQL, MongoDB, Docker and Kubernetes.
        </div>
        <div className="scroll"><a className="scrolltonext" href="#skills">SCROLL FOR MORE</a></div>
      </div>
      <div className="home-parent-right">
        <div className="img-Container">
          <img className="myImg" src={image} />
        </div>
      </div>
    </div>
  );
};

export default Home;
