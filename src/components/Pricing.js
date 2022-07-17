import "../css/styles.css";
import React from "react";
// import image1 from "../assets/img/pricing.png";
import ScrollAnimation from "react-animate-on-scroll";
function Pricing() {
  return (
    <div>
      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Pricing Structure
          </h2>
          <br />
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5}>
            <div className="pricingContainer">
              <div className="pricingWrapper">
                <ul className="pricingSessions">
                  <li>
                    <div className="pricingTime">#1 - #499</div>
                    <p>0.02 ETH</p>
                  </li>
                  <li>
                    <div className="pricingTime">#500 - #999</div>
                    <p>0.04 ETH</p>
                  </li>
                  <li>
                    <div className="pricingTime">#1000 - #1499</div>
                    <p>0.06 ETH</p>
                  </li>
                  <li>
                    <div className="pricingTime">#1500 - #1999</div>
                    <p>0.08 ETH</p>
                  </li>
                  <li>
                    <div className="pricingTime">#2000 - #2499</div>
                    <p>0.1 ETH</p>
                  </li>
                  <li>
                    <div className="pricingTime">#2500 - #2999</div>
                    <p>0.15 ETH</p>
                  </li>
                  <li>
                    <div className="pricingTime">#3000 - #3499</div>
                    <p>0.2 ETH</p>
                  </li>
                  <li>
                    <div className="pricingTime">#3500 - #3999</div>
                    <p>0.5 ETH</p>
                  </li>
                  <li>
                    <div className="pricingTime">#4000 - #4089</div>
                    <p>1 ETH</p>
                  </li>
                  <li>
                    <div className="pricingTime">#4090 - #4096</div>
                    <p>AUCTIONED</p>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
export default Pricing;
