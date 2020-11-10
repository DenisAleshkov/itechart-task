import React from "react";
import Movies from "./views/Movies";
import Details from "./views/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route
              exact
              path="/details/:id"
              render={(props) => <Details id={+props.match.params.id} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
