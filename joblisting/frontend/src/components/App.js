import React, { Component, Fragment } from "react";
import ReactDOM, { render } from "react-dom";
import Pagination from "./Pagination";
import "../../static/frontend/css/app.css";
import uuid from "react-uuid";
import CommentIcon from "@material-ui/icons/Comment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import JobDetails from "./JobDetails";
import JobSingle from "./JobSingle";
function App() {
  return (
    <div id="Home">
      <JobDetails />
      <Router>
        <Route exact path="/jobsingle/:id" component={JobSingle} />
      </Router>
    </div>
  );
}

export default App;
