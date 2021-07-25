import App from "./App";
import PostJob from "./PostJob";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routing() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/about">
            <h1>Hello About us</h1>
          </Route>
          <Route path="/login">
            <h1>login page</h1>
          </Route>
          <Route path="/postJob">
            <h1>PostJob</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
