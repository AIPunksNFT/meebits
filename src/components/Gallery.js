import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../css/styles.css";
import image1 from "../assets/img/1.jpg";
import ScrollAnimation from "react-animate-on-scroll";

var images = [];
function showImages() {
  for (var i = 1; i <= 24; i++) {
    var pic = "/images/" + i + ".gif";
    images.push(
      <div className="col-md-6 col-lg-4 mb-5">
        <div
          className="portfolio-item mx-auto"
          data-toggle="modal"
          data-target="#portfolioModal1"
        >
          <div>
            <p className="lead text-black text-center">
              <img className="img-fluid" src={pic} alt="..." />
              <h4>MeebitAvatar #{i}</h4>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
function Gallery(props) {
  showImages();
  return (
    <div style={{ background: "" }}>
      <section className="page-section portfolio" id="portfolio">
        <div className="container" key="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Gallery
          </h2>

          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
            <div className="row justify-content-center">{images}</div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
export default Gallery;
