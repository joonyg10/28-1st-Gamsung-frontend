import React from "react";
import MainCarousel from "./MainCarousel/MainCarousel";
import Services from "./Services/Services";
import PreviewTab from "./PreviewTab/PreviewTab";
import Story from "./Story/Story";
import Trend from "./Trend/Trend";
import Navbar from "../../components/Navbar/Navbar";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <MainCarousel />
        <Services />
        <PreviewTab />
        <Story />
        <Trend />
      </main>
    </>
  );
};

export default Main;
