import React from "react";
import "./style/style.css";

const Landingnews = ({ newsData }) => {
  return (
    <>
      <section className="card-container">
        {newsData.map((currElem) => {
          return (
            <>
              <div className="containers1" key={currElem.gamename}>
                <div className="image">
                  <img src={currElem.imgsrc[0]} width="100%" alt="" />
                </div>
                <div className="content">
                  <div className="w-display-card-content">
                    <div className="w-display-card-category">
                      <a
                        className="tag-lable-text"
                        href="../Main file/newsformat.html"
                      >
                        {currElem.gamename}
                      </a>
                    </div>
                    <h5 className="display-card-title">
                      <a href="../Main file/newsformat.html">
                        {currElem.heading}
                      </a>
                    </h5>
                    <p className="display-card-excerpt">
                      {currElem.breifContent}
                    </p>
                    <div className="w-display-card-details">
                      <div className="w-display-card-meta">
                        <span className="meta-text-author">By</span>
                        <a href="#c" className="display-card-author">
                          Sumit jakhar
                        </a>
                        <time
                          className="dispaly-card-date"
                          datetime="2023-04-24T10:14:55z"
                        >
                          10 min ago
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="spacer"></div>
              </div>
              ;
            </>
          );
        })}
      </section>
    </>
  );
};

export default Landingnews;
