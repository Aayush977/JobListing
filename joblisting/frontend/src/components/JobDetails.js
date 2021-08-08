import React, { Component, Fragment } from "react";
import ReactDOM, { render } from "react-dom";
import Pagination from "./Pagination";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../static/frontend/css/app.css";
import uuid from "react-uuid";
import CommentIcon from "@material-ui/icons/Comment";
import App from "./App";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import "../../static/frontend/css/jobDetails.css";
import "../../static/frontend/css/app.css";

class JobDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: null,

      data: [],
      pageOfItems: [],
    };
    this.onChangePage = this.onChangePage.bind(this);
    this.onClickLike = this.onClickLike.bind(this);
    this.changeRoute = this.changeRoute.bind(this);
    this.onClickDislike = this.onClickDislike.bind(this);
  }
  onClickDislike = (index) => {
    this.setState((prevState) => ({
      [index]: prevState[index] ? prevState[index] - 1 : 0,
    }));
  };
  onClickLike = (index) => {
    this.setState((prevState) => ({
      [index]: prevState[index] ? prevState[index] + 1 : 1,
    }));
  };

  changeRoute = (index) => {
    this.context.router.push("/jobSingle/${index}");
  };

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/forums/")
      .then((response) => response.json())

      .then((jobs) => {
        this.setState({ data: jobs });
      })
      .catch(function (err) {
        console.log("Error in load page");
      });
  }

  render() {
    return (
      <div className="container" onClick={this.changeRoute}>
        {this.state.pageOfItems.map((item, index) => (
          <div key={item.id}>
            <ul className="job-listings mb-5">
              <li className="job-listing">
                <div className="job-listing-about">
                  <div className="like__button">
                    <div className="border__like">
                      <ThumbUpAltOutlinedIcon
                        onClick={() => this.onClickLike(index)}
                        className="arrowUpward"
                      />

                      <span className="NumberOfvotes">
                        {this.state[index] ? this.state[index] : 0}
                      </span>

                      <ThumbDownAltOutlinedIcon
                        className="arrowDownward"
                        onClick={() => this.onClickDislike(index)}
                      />
                    </div>
                  </div>

                  <div className="job-listing-position">
                    <strong>
                      <h4 className="joblisting__h3">{item.title_ad}</h4>
                    </strong>
                    <div className="job-listing-position-below">
                      <CommentIcon className="commentIcon" />
                      <span className="comments">371 Comments</span>
                    </div>
                  </div>
                  <div className="job-listing-location">
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
        ;
        <Pagination items={this.state.data} onChangePage={this.onChangePage} />
      </div>
    );
  }
}
ReactDOM.render(<JobDetails />, document.getElementById("app"));
export default JobDetails;
