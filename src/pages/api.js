import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { useHistory, useParams } from "react-router-dom";


function Api(props) {
  var file = require("../assets/json/metadata.json");
  file = JSON.stringify(file);
  console.log(file[0]);
  // console.log(JSON.parse(file));
  return <div>{file}</div>;
}

export default Api;
