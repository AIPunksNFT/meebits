import "../css/styles.css";
import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/img/1.gif";
import FadeIn from "react-fade-in";
import ScrollAnimation from "react-animate-on-scroll";
function Overview() {
  return (
    <div>
      <section className="page-section bg-white text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-black">
            Overview
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOnce={true}
            duration={1}
          >
            <div className="row">
              <div className="col-lg-4 ml-auto">
                <p className="lead text-black">
                  BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
                  collectibles living on the Ethereum blockchain. Your Bored Ape
                  doubles as your Yacht Club membership card, and grants access
                  to members-only benefits, the first of which is access to THE
                  BATHROOM, a collaborative graffiti board. Future areas and
                  perks can be unlocked by the community through roadmap
                  activation.
                </p>
              </div>

              <div className="col-lg-4 ml-auto">
                <p className="lead">
                  <img src={image1} alt="/" className="hari1" />
                </p>
              </div>

              <div className="col-lg-4 ml-auto">
                <p className="lead text-black">
                  BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
                  collectibles living on the Ethereum blockchain. Your Bored Ape
                  doubles as your Yacht Club membership card, and grants access
                  to members-only benefits, the first of which is access to THE
                  BATHROOM, a collaborative graffiti board. Future areas and
                  perks can be unlocked by the community through roadmap
                  activation.
                </p>
              </div>

              <div className="col-lg-4 mr-auto">
                <p className="lead text-black">
                  BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
                  collectibles living on the Ethereum blockchain. Your Bored Ape
                  doubles as your Yacht Club membership card, and grants access
                  to members-only benefits, the first of which is access to THE
                  BATHROOM, a collaborative graffiti board. Future areas and
                  perks can be unlocked by the community through roadmap
                  activation.
                </p>
              </div>

              <div className="col-lg-4 ml-auto">
                <p className="lead">
                  <img src="/images/4.gif" alt="/" className="hari1" />
                </p>
              </div>

              <div className="col-lg-4 mr-auto">
                <p className="lead text-black">
                  BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
                  collectibles living on the Ethereum blockchain. Your Bored Ape
                  doubles as your Yacht Club membership card, and grants access
                  to members-only benefits, the first of which is access to THE
                  BATHROOM, a collaborative graffiti board. Future areas and
                  perks can be unlocked by the community through roadmap
                  activation.
                </p>
              </div>
            </div>
            <div className="text-center mt-4">
              <Link className="btn btn-xl btn-outline-primary" to="/Wallet">
                GET YOUR MEMEBITS
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
export default Overview;
