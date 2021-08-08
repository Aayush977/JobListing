import React, { Component, Fragment } from "react";
import ReactDOM, { render } from "react-dom";

class PostJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      title_ad: "",
      location: "",
      job_type: "",
      job_region: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log("form submitted");
    e.preventDefault();

    let url = "http://127.0.0.1:8000/api/createForums/";

    const response = fetch(url, {
      credentials: "include",
      method: "POST",

      body: JSON.stringify({
        user: this.state.user,
        title_ad: this.state.title_ad,
        location: this.state.location,
        job_type: this.state.job_type,
        job_region: this.state.job_region,
        description: this.state.description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <form>
        <div className="row mb-5">
          <div className="col-lg-12">
            <h3 className="text-black mb-5 border-bottom pb-2">Job Details</h3>

            <div className="form-group">
              <label for="company-website-tw d-block">
                Upload Featured Image
              </label>{" "}
              <br />
              <label className="btn btn-primary btn-md btn-file">
                Browse File
                <input type="file" hidden />
              </label>
            </div>

            <div className="form-group">
              <label for="email">Username</label>
              <input
                type="text"
                className="form-control"
                id="user"
                name="user"
                placeholder="Email"
                value={this.state.user}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="job-title">Jo Title</label>
              <input
                type="text"
                className="form-control"
                id="title_ad"
                name="title_ad"
                placeholder="Product Designer"
                value={this.state.title_ad}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="location">Location</label>
              <input
                type="text"
                name="location"
                className="form-control"
                id="location"
                placeholder="e.g. New York"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label for="job-region">Job Region</label>
              <select
                className="selectpicker border rounded"
                name="job_region"
                data-style="btn-black"
                data-width="100%"
                data-live-search="true"
                title="Select Region"
                id="job_region"
                value={this.state.job_region}
                onChange={this.handleChange}
              >
                <option>Anywhere</option>
                <option>NSW</option>
                <option>ACT</option>
                <option>TAS</option>
                <option>VIC</option>
                <option>SA</option>
                <option>WA</option>
              </select>
            </div>

            <div className="form-group">
              <label for="job-type">Job Type</label>
              <select
                className="selectpicker border rounded"
                name="job_type"
                id="job_type"
                data-style="btn-black"
                data-width="100%"
                data-live-search="true"
                title="Select Region"
                value={this.state.job_type}
                onChange={this.handleChange}
              >
                <option>Part Time</option>
                <option>Full Time</option>
                <option>Casual</option>
              </select>
            </div>

            <div className="form-group">
              <label for="job-description">Job Description</label>
              <div type="text" className="editor">
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  id="description"
                  placeholder="Write Job Description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <a href="#" className="btn btn-light btn-md">
                  <span className="icon-open_in_new mr-2"></span>Preview
                </a>
              </div>
              <div className="col-6">
                <input
                  type="submit"
                  value="Save a Job"
                  className="btn btn-primary btn-md"
                  onClick={this.handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default PostJob;

ReactDOM.render(<PostJob />, document.getElementById("postJob"));
