import React, {Component, Fragment} from 'react';
import ReactDOM, {render} from "react-dom";


class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <h1>
        "Welcome to the Post Job View"
      </h1>
      
    );
  }
}
export default List;
//ReactDOM.render(<List />, document.getElementById('postJob'));