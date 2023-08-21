import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import MainPage from "./components/mainPage";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Slider from "./components/slider";
import Signup from "./components/signup";

const AppContainer = () => {
  return (
    <>
      <Router>
        <App />
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Slider />} />
        </Routes>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

const root = document.getElementById("root");
createRoot(root).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
