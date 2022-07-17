import "../css/styles.css";
import React from "react";
function getIpfsLink() {
  var list = [];
  var file = require("../assets/json/metadata.json");
  var length = Object.keys(file).length;
  for (var i = 0; i <= length - 1; i++) {
    list.push(
      <tr>
        <td data-label="Name">MeebitAvatar #{i}</td>
        <td data-label="Age">
          <a href="" target="_blank">
            {file[i].external_url}
          </a>
        </td>
      </tr>
    );
  }
  return list;
}
function IPFS() {
  return (
    <div>
      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            IPFS Records
          </h2>
          <br />
          <table className="ui celled table">
            <thead>
              <th>Avatar ID</th>
              <th>IPFS Link</th>
            </thead>
            <tbody>{getIpfsLink()}</tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
export default IPFS;
