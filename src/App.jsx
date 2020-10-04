import React from "react";
import Benefits from "./components/Benefits";
import Home from "./components/Home";
import ScrollTop from "./components/ScrollTop";

const App = () => {
  return (
    <React.Fragment>
      <Home />
      <Benefits />
      <ScrollTop breakpoint={100} />
    </React.Fragment>
  );
};

export default App;
