import "../css/styles.css";
import { Link } from "react-router-dom";
import image1 from "../assets/img/1.jpg";
import React, { Component } from "react";
import FadeIn from "react-fade-in";
import ScrollAnimation from "react-animate-on-scroll";

var images = [];
function showImages() {
  images = [];
  for (var i = 1; i <= 6; i++) {
    var pic = "/images/" + i + ".gif";
    images.push(
      <div className="col-md-6 col-lg-4 mb-5">
        <div
          className="portfolio-item mx-auto"
          data-toggle="modal"
          data-target="#portfolioModal1"
        >
          <img className="img-fluid" src={pic} alt="..." />
        </div>
      </div>
    );
  }
}
function Portfolio(props) {
  showImages();
  return (
    <div style={{ background: "#8577fb" }}>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            avatars
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5}>
            <div className="row justify-content-center">{images}</div>

            <div className="text-center mt-4">
              <Link
                className="btn btn-xl btn-outline-light"
                to="/Gallery"
                key="portfolio"
              >
                VIEW MORE
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
export default Portfolio;
