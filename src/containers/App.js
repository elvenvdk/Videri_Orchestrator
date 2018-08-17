import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import styles from "./App.scss";
import Login from "../components/login/Login";
import Content from "../components/content/Content";
import PrivateRoute from "../components/private-route/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/content" component={Content} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
