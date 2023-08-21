import React, { useState } from "react";
import "./style/style.css";
import News from "./newsApi.js";
import Landingnews from "./landingnews";

const MainPage = () => {
  let [newsData] = useState(News || []);
  return <Landingnews newsData={newsData} />;
};

export default MainPage;
