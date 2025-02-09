// /frontend-mur/src/pages/Home.jsx
import React from "react";
import QRCodeDisplay from "../components/QRCodeDisplay";
import ProgressBar from "../components/ProgressBar";
import DonorList from "../components/DonorList";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <div className="left">
          <QRCodeDisplay />
        </div>
        <div className="center">
          <ProgressBar />
        </div>
        <div className="right">
          <DonorList />
        </div>
      </div>
    </div>
  );
};

export default Home;
