import React from "react";
import ReactDOM from "react-dom";
import "./styles/all.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from "./App";
import Footer from "./components/Footer";

const appContainer = document.getElementById("root");
const footerContainer = document.getElementById("footer-container");

ReactDOM.render(<App />, appContainer);
ReactDOM.render(<Footer />, footerContainer);
