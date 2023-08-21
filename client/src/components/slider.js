import React, { useEffect } from "react";
import "./style/style.css";

const Slider = () => {
  useEffect(() => {
    let counter = 1;
    const interval = setInterval(() => {
      document.getElementById("r" + counter).checked = true;
      counter++;
      if (counter > 4) {
        counter = 1;
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slidershow middle">
      <div className="slides">
        <input type="radio" name="r" id="r1" checked />
        <input type="radio" name="r" id="r2" />
        <input type="radio" name="r" id="r3" />
        <input type="radio" name="r" id="r4" />

        <div className="slide s1">
          <img src="../img/a.jpg" alt="" />
        </div>
        <div className="slide">
          <img src="../img/b.jpg" alt="" />
        </div>
        <div className="slide">
          <img src="../img/c.jpg" alt="" />
        </div>
        <div className="slide">
          <img src="../img/d.jpg" alt="" />
        </div>
        <div className="navigation">
          <label htmlFor="r1" className="bar"></label>
          <label htmlFor="r2" className="bar"></label>
          <label htmlFor="r3" className="bar"></label>
          <label htmlFor="r4" className="bar"></label>
        </div>

        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
