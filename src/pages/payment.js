import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Payment from "../components/Payment";
const PaymentPage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <br />
      <br />
      <Payment />
      <Footer />
    </>
  );
};

export default PaymentPage;
