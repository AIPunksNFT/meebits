import "../css/styles.css";
import React, { useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

function NoMetamask(props) {
  const disableButton = async () => {
    console.log("inside");
    const button = document.querySelector("button");
    if (document.getElementById("connect")) {
      console.log("inside1");
      button.disabled = true;
      document.getElementById("connect").disabled = true;
      await window.ethereum.enable();
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.web3) {
        window.web3.eth.getAccounts(function (err, accounts) {
          if (err != null) {
            console.log(err);
          } else if (accounts.length !== 0) {
            window.location.reload();
          }
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <header className="masthead bg-white text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img className="masthead-avatar mb-5" src={props.image} alt="..." />
          <h1 className="masthead-heading text-uppercase mb-0 text-black">
            {props.text}
          </h1>
          <p className="masthead-subheading font-weight-light mb-0 text-black">
            {props.para}
          </p>
          <div className="text-center mt-4">
            {props.showDownload === "true" ? (
              <a
                className="btn btn-xl btn-outline-primary"
                href="https://metamask.io/"
                target="_blank"
              >
                DOWNLOAD METAMASK
              </a>
            ) : (
              <button
                id="connect"
                className="btn btn-xl btn-outline-primary"
                onClick={() => disableButton()}
              >
                CONNECT METAMASK
              </button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
export default NoMetamask;
