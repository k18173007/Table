import React from "react";

import fbLogo from "../assets/images/facebook-brands.svg";
import lnkdLogo from "../assets/images/linkedin-brands.svg";
import instLogo from "../assets/images/instagram-square-brands.svg";
import twitLogo from "../assets/images/twitter-square-brands.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-sm-12 col-lg-4 px-0">
          <h1>Priority Pulse</h1>
        </div>
        <div className="col-sm-12 col-lg-5 footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>Nithish</li>
            <li>Kiran</li>
            <li>Sudeep</li>
            <li>Harish</li>
          </ul>
        </div>
        <div className="col-sm-12 col-lg-3">
          <h3>Email</h3>
          <p>prioritypulse@gmail.com</p>
          <ul>
            <li>
              <a
                href="localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" alt="Twitter" src={twitLogo} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/priority-pulse-pvt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" alt="LinkedIn" src={lnkdLogo} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/PriorityPulse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" alt="Facebook" src={fbLogo} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/priority_pulse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" alt="Instagram" src={instLogo} />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>&#169; 2020 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
