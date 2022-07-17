import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Overview from "../components/Overview";
const OverviewPage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <br />
      <br />
      <Overview />
      <Footer />
    </>
  );
};

export default OverviewPage;
