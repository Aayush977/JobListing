import App from "./App";
import PostJob from "./PostJob";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JobSingle from "./JobSingle";
import uuid from "react-uuid";
class Routing extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }
  render() {
    return (
      <Router>
        <Route path="/jobSingle/:uuid" component={JobSingle} />
      </Router>
    );
  }
}
export default Routing;
