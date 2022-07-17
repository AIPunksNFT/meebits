import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IPFS from "../components/ipfs";
const IPFSPage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <IPFS />
      <Footer />
    </>
  );
};

export default IPFSPage;
