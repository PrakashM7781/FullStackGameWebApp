import React from "react";
import "./style/style.css";

const Header = () => {
  return (
    <>
      <div id="progress">
        <span id="progress-value">&#x1F815;</span>
      </div>
      <header>
        <div className="head">
          <div id="logo">
            <span className="logoImg">
              <img src="../img/logo.png" alt="logo" />
            </span>
          </div>
          <span className="slogen">
            <i>
              <h4>Gamers never die, they just respawn</h4>
            </i>
          </span>
          <ul className="wrapper">
            <li className="icon facebook">
              <span className="tooltip">facebook</span>
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
            </li>

            <li className="icon twitter">
              <span className="tooltip">twitter</span>
              <span>
                <i className="fab fa-twitter"></i>
              </span>
            </li>

            <li className="icon instagram">
              <span className="tooltip">instagram</span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
            </li>

            <li className="icon youtube">
              <span className="tooltip">youtube</span>
              <span>
                <i className="fab fa-youtube"></i>
              </span>
            </li>
            <li className="icon discord">
              <span className="tooltip">discord</span>
              <span>
                <i className="fab fa-discord"></i>
              </span>
            </li>
          </ul>
          <div className="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
