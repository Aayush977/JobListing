import React, { Component, Fragment } from "react";
import ReactDOM, { render } from "react-dom";
import Pagination from "./Pagination";
import { BrowserRouter, Link } from "react-router-dom";
import "../../static/frontend/css/app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pageOfItems: [],
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/forums/")
      .then((response) => response.json())

      .then((jobs) => {
        this.setState({ data: jobs });
        console.log(jobs);
      })
      .catch(function (err) {
        console.log("Error in loading page");
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.pageOfItems.map((item, index) => (
          <div key={item.id}>
            <ul className="job-listings mb-5">
              <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                  <div className="job-listing-user custom-width mb-3 mb-sm-0">
                    {item.id}
                  </div>
                  <div className="job-listing-position custom-width w-80 mb-3 mb-sm-0">
                    <strong>{item.title_ad}</strong>
                  </div>
                  <div className="job-listing-location mb-3 mb-sm-0 custom-width w-15">
                    <span className="icon-room">{item.location}</span>
                  </div>
                  <div className="job-listing-meta">
                    <span className="badge badge-danger">{item.job_type}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ))}
        <Pagination items={this.state.data} onChangePage={this.onChangePage} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
export default App;
