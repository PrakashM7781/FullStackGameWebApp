import React from "react";
import { Link } from "react-router-dom";
import "./style/style.css";

const Navigation = () => 

{
  return (
    <>
      <div class="topnav">
        <div class="i">
          <i class="fa fa-home" style={{ fontSize: "24px" }}></i>
        </div>
        <a href="#news">News</a>
        <a href="#news">Trending</a>
        <a href="#contact">Hardware</a>
        <a href="#contact">Contact</a>
        <a href="#about">More</a>
        <div class="login">
          <li>
            <Link to="/signup">
              <i className="fa fa-fw fa-user"></i> Login/Signup
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navigation;
