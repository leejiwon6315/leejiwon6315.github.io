import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Comments from "./Comments";
import Navigation from "../Navigation/Navigation";

const Hello = ({ name }) => {
  return (
    <BrowserRouter>
      <Navigation />

      <Route path="/Home" render={() => <Home name={name} />} />
      <Route path="/Comments" render={() => <Comments name={name} />} />
    </BrowserRouter>
  );
};

export default Hello;
