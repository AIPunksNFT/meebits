import "../css/styles.css";
import React from "react";
function Footer() {
  return (
    <div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0"></div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://twitter.com/meebit_avatars"
                target="_blank"
              >
                <i className="fab fa-fw fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://discord.gg/m4MPstgTNd"
                target="_blank"
              >
                <i className="fab fa-fw fa-discord"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="/IPFS"
                target="_blank"
              >
                <i className="fab fa-fw fa-discord"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
