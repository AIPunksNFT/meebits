import "../css/styles.css";
import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import ScrollAnimation from "react-animate-on-scroll";
import Loader from "react-loader-spinner";
import Alert from "simple-react-alert";

function Header(props) {
  function call() {
    alert("hi");
  }
  return (
    <div>
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          {(() => {
            if (props.changeBackground === "true") {
              return (
                <img
                  className="masthead-avatar mb-5 hari"
                  src={props.image}
                  alt="..."
                />
              );
            } else {
              return (
                <img
                  className="masthead-avatar mb-5"
                  src={props.image}
                  alt="..."
                />
              );
            }
          })()}
          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOnce={true}
            duration={1}
          >
            <h1 className="masthead-heading text-uppercase mb-0 yellow">
              {props.text}
            </h1>
            <p className="masthead-subheading font-weight-light mb-0 yellow1">
              {props.para}
            </p>
            <div className="text-center mt-4">
              {(() => {
                if (props.page === "noMetamask") {
                  return (
                    <a
                      className="btn btn-xl btn-outline-light"
                      href="https://metamask.io/"
                      target="_blank"
                    >
                      DOWNLOAD METAMASK
                    </a>
                  );
                } else {
                  return (
                    <div>
                      <Link
                        className="btn btn-xl btn-outline-light"
                        to="/Wallet"
                        onClick={call}
                      >
                        GET YOUR AVATAR
                      </Link>
                      <Alert successColor="#ffffff" />
                    </div>
                  );
                }
              })()}
            </div>
          </ScrollAnimation>
        </div>
      </header>
    </div>
  );
}
export default Header;
