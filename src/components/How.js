import "../css/styles.css";
import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/img/metamask.png";
import image2 from "../assets/img/ethereum.svg";
import image3 from "../assets/img/buy.svg";
import ScrollAnimation from "react-animate-on-scroll";
function How() {
  return (
    <div style={{ background: "#8577fb" }}>
      <section className="page-section text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-black">
            how do i get an avatar?
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOnce={true}
            duration={1.5}
          >
            <div className="row">
              <div className="col-lg-4 ml-auto">
                <p className="lead text-black text-center">
                  <img src={image1} alt="/" className="ethereum" />
                  Download and install a Chrome browser plugin called MetaMask.
                  This will allow websites (that you authorize) access to your
                  Ethereum account.
                </p>
              </div>
              <div className="col-lg-4 ml-auto">
                <p className="lead text-black text-center">
                  <img src={image2} alt="/" className="ethereum1" />
                  If you made a new account, buy some Ether. The MetaMask plugin
                  has a button that will allow you to buy Ether from Coinbase.
                </p>
              </div>
              <div className="col-lg-4 ml-auto">
                <p className="lead text-black text-center">
                  <img src={image3} alt="/" className="hari1" />
                  Once you have the plugin installed, this website will
                  recognize it and add buttons that allow you mint meebit
                  avatars directly in the interface.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
export default How;
