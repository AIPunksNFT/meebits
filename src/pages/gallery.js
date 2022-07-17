import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
const GalleryPage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <br />
      <br />
      <Gallery />
      <Footer />
    </>
  );
};

export default GalleryPage;
