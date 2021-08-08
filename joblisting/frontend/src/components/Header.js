import React, { Component, Fragment } from "react";
import ReactDOM, { render } from "react-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>"Heading hello from the other baby hehehe side"</h1>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("header"));
