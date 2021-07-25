import React, { Component, Fragment } from "react";
import ReactDOM, { render } from "react-dom";
import {BrowserRouter, Link} from 'react-router-dom';

class jobSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/forums/")
      .then((response) => response.json())

      .then((jobs) => {
        this.setState({ data: jobs });
        console.log(jobs);
          
      })
      .catch(console.log(data));
  }

  render() {
    
    return (
      <div className="container">
        {this.state.data.map((item) => (
          
          <div key={item.id}>
            <p>Hello world</p>
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('jobSingle'));
