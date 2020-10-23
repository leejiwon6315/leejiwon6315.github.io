import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./Profile";
import Works from "./Works";
import Comments from "./Comments";
import Navigation from "../Navigation/Navigation";

const Hello = ({ name }) => {
  return (
    <BrowserRouter>
      <Navigation name={name} />

      <Route path={`/HELLO/${name}`} render={() => <Profile name={name} />} />
      <Route path={`/HELLO/My_Works`} render={() => <Works name={name} />} />
      <Route
        path={`/HELLO/${name}'s_comments`}
        render={() => <Comments name={name} />}
      />
    </BrowserRouter>
  );
};

export default Hello;
