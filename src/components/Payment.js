import "../css/styles.css";
import React from "react";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div>
      <header className="masthead bg-white text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <div className="card Blink">
            <div className="card__icon">
              <svg viewBox="0 0 100 100">
                <g transform="translate(0,-952.36218)">
                  <path
                    d="m 20,984.36256 c -9.9374,0 -18,8.06262 -18,18.00004 0,9.9374 8.0626,18 18,18 l 19,0 a 2.0002,2.0002 0 1 0 0,-4 l -19,0 c -7.7906,0 -13.9999999,-6.2094 -13.9999999,-14 0,-7.79062 6.2093999,-14.00004 13.9999999,-14.00004 l 21,0 c 7.7906,0 14,6.20942 14,14.00004 a 2.0002,2.0002 0 1 0 4,0 c 0,-9.93742 -8.0626,-18.00004 -18,-18.00004 l -21,0 z m 40.875,0 a 2.0009763,2.0009763 0 1 0 0.125,4 l 19,0 c 7.7906,0 14,6.20942 14,14.00004 0,7.7906 -6.2094,14 -14,14 l -21,0 c -7.7906,0 -14,-6.2094 -14,-14 a 2.0002,2.0002 0 1 0 -4,0 c 0,9.9374 8.0626,18 18,18 l 21,0 c 9.9374,0 18,-8.0626 18,-18 0,-9.93742 -8.0626,-18.00004 -18,-18.00004 l -19,0 a 2.0002,2.0002 0 0 0 -0.125,0 z"
                    fill-opacity="1"
                    stroke="none"
                    marker="none"
                    visibility="visible"
                    display="inline"
                    overflow="visible"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <p className="masthead-subheading font-weight-light mb-0 text-black">
            Your token is being added to blockchain. The transaction might take
            some time. You can check in Wallet History after some time.
          </p>
          <div className="text-center mt-4">
            <Link
              className="btn btn-xl btn-outline-primary"
              to="/Wallet"
              key="payment"
            >
              MINT MORE
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Payment;
