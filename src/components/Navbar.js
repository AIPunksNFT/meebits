import "../css/styles.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger logo" to="/">
            MEEBIT avatars
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-secondary text-white rounded"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  key="home"
                  to="/"
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item mx-0 mx-lg-1">
                <Link
                  to="/Overview"
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                >
                  Overview
                </Link>
              </li> */}
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  key="gallery"
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  to="/Gallery"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  key="wallet"
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  to="/Wallet"
                >
                  Wallet
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  key="mycollections"
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  to="/WalletHistory"
                >
                  Wallet History
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  key="mycollections"
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                  href="google.com"
                  target="_blank"
                >
                  Wallet History
                </a>
              </li>
              <div id="checkforMobile">
                <a
                  className="btn-outline-light btn-social mx-1"
                  href="https://twitter.com/meebit_avatars"
                  target="_blank"
                >
                  <i className="fab fa-fw fa-twitter"></i>
                </a>
                <a className="btn-outline-light btn-social mx-1" href="#!">
                  <i className="fab fa-fw fa-discord"></i>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
