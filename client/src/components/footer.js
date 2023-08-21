import React from "react";
import { Link } from "react-router-dom";
import "./style/style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src="/img/logo.png" alt="" className="center" />
      </div>
      <div className="row">
        <div className="footer-col">
          <ul>
            <li className="follow">Follow Us on</li>
            <div className="social-links">
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-discord"></i>
              </Link>
            </div>
          </ul>
        </div>
        <div className="footer-col">
          <ul>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Advertise with us</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <ul>
            <li>
              <Link to="#">Terms and conditions</Link>
            </li>
            <li>
              <Link to="#">Review Guidelines</Link>
            </li>
            <li>
              <Link to="#">Do not sell any information</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <ul>
            <li>
              <Link to="#">Privacy policy</Link>
            </li>
            <li>
              <Link to="#">Cookies policy</Link>
            </li>
            <li>
              <Link to="#">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 Gamers ADDA. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};

export default Footer;
