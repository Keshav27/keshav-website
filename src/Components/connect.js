import "./connect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faSnapchat,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Connect = () => {
  return (
    <div className="connect">
      <div className="next">WHATS NEXT</div>
      <div className="together">Lets work together!</div>
      <div className="message">
        If you'd like to talk about a project you want help with or need an
        advice, just drop me a message at{" "}
        <span className="id">keshavgarg199.kg@gmail.com</span>
      </div>
      <div className="email">
        <a
          href="mailto:keshavgarg199.kg@gmail.com?subject=Ui%2FUX%20Opportunity"
          className="email-button"
        >
          WRITE ME AN EMAIL&nbsp;
          <FontAwesomeIcon className="email-icon" icon={faEnvelope} />
        </a>
      </div>
      <div className="social">
        <a href="https://www.instagram.com/keshav_garg27/" target="_blank">
          <FontAwesomeIcon className="social-icon" icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/keshav-garg-189851126/"
          target="_blank"
        >
          <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
        </a>
        <a
          href="https://www.snapchat.com/add/kgarg74?share_id=BuATT5XGFsY&locale=en-IN"
          target="_blank"
        >
          <FontAwesomeIcon className="social-icon" icon={faSnapchat} />
        </a>
        <a href="https://m.facebook.com/keshav.garg.31945" target="_blank">
          <FontAwesomeIcon className="social-icon" icon={faFacebook} />
        </a>
        <a href="https://github.com/Keshav27" target="_blank">
          <FontAwesomeIcon className="social-i" icon={faGithub} />
        </a>
      </div>

      <div className="footer">BUILT FROM SCRATCH BY ME :)</div>
    </div>
  );
};

export default Connect;
