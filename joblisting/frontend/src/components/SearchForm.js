import React, { Component, Fragment } from "react";
import ReactDOM, { render } from "react-dom";
import "../../static/frontend/css/searchform.css";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  render() {
    return (
      <div className="search-filter-content">
        <ul className="clearfix">
          <li className="search-type-job">
            <label className="searchlabel">Find a</label>
            <div className="body__searchform">
              <input
                id="serviceType"
                type="text"
                className="autocomplete-input"
                placeholder="Room"
              ></input>
            </div>
          </li>
          <li className="search-type-region">
            <label className="searchlabel">Around</label>
            <div className="body_searchform">
              <select
                id="region"
                className="autocomplete-input"
                data-width="100%"
                data-live-search="true"
                title="Select Region"
              >
                <option>All</option>
                <option>San Francisco</option>
                <option>Palo Alto</option>
                <option>New York</option>
                <option>Manhattan</option>
                <option>Ontario</option>
                <option>Toronto</option>
                <option>Kansas</option>
                <option>Mountain View</option>
              </select>
            </div>
          </li>
          <li className="search-type-jobtype">
            <label className="searchlabel">For a </label>
            <div className="body_searchform">
              <select
                id="jobtype"
                className="autocomplete-input"
                data-width="100%"
                data-live-search="true"
                title="Select Job Type"
              >
                <option>Part Time</option>
                <option>Full Time</option>
                <option>Casual</option>
              </select>
            </div>
          </li>
          <div className="body__searchsubmit">
            <button type="submit" className="searchsubmit">
              <span className="icon-search icon mr-2">Search Job</span>
            </button>
          </div>
        </ul>
        <div className="quick-search-bar">
          <span className="quick-search-bar-title">Trending Keyword</span>
          <ul className="items-bar">
            <li className="search-bar-item">
              <a href="#" className="icon">
                Rent
              </a>
            </li>
            <li className="search-bar-item">
              <a href="#" className="icon">
                Room
              </a>
            </li>
            <li className="search-bar-item">
              <a href="#" className="icon">
                Jobs
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<SearchForm />, document.getElementById("searchForm"));
export default SearchForm;
