import "../css/styles.css";
import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/img/1.jpg";
import ScrollAnimation from "react-animate-on-scroll";
function About1() {
  return (
    <div>
      <section class="page-section bg-white text-white mb-0" id="about">
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase text-black">
            discover the universe of meebit avatars
          </h2>
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div>

          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOnce="true"
            duration={1.5}
          >
            <div class="row">
              <div class="ml-auto">
                <p class="lead text-black text-center">
                  Meebit Avatars exist in many shapes and colours, each
                  differing in unique looks and individual rarity. There are
                  also ultra-rare variants waiting for you to discover.
                </p>
              </div>
              <div class="col-lg-4 ml-auto">
                <p class="lead text-black text-center">
                  <img src={image1} alt="/" class="hari1" />
                  <h4>Colors</h4>
                  Avatars come in a variety of colors, each resembling a
                  different hue of the rainbow.
                </p>
              </div>

              <div class="col-lg-4 ml-auto">
                <p class="lead text-black text-center">
                  <img src="/images/4.gif" alt="/" class="hari1" />
                  <h4>Animate</h4>
                  Avatars come in a variety of colors, each resembling a
                  different hue of the rainbow.
                </p>
              </div>
              <div class="col-lg-4 ml-auto">
                <p class="lead text-black text-center">
                  <img src="/images/2.gif" alt="/" class="hari1" />
                  <h4>Ultra rare</h4>
                  Avatars come in a variety of colors, each resembling a
                  different hue of the rainbow.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div class="text-center mt-4">
          <Link class="btn btn-xl btn-outline-primary" to="/Wallet">
            MINT AVATARS
          </Link>
        </div>
      </section>
    </div>
  );
}
export default About1;
