import React, { Component, Fragment } from "react";
import ReactDOM, { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/forums/")
      .then((response) => response.json())

      .then((jobs) => {
        this.setState({ data: jobs });
          
      })
      .catch(console.log);
  }

  render() {

    return (
      <div className="container">
        {this.state.data.map((item) => (
          
          <div key={item.id}>
            <ul className="job-listings mb-5">
              <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                <a href="{%url 'account:jobSingle' pk=forum.pk %}" />
                <div className="job-listing-logo">
                  <img
                    src="{%static 'frontend/images/job_logo_1.jpg' %}"
                    className="img-fluid"
                  />
                </div>

                <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                  <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                    <strong>{item.title_ad}</strong>
                  </div>
                  <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
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
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
  


