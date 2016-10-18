import React from "react";
import ReactDom from "react-dom";
import { Router, Route, browserHistory } from 'react-router';
import App from "./components/app";

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/filter/:filterCategory/:filterValue" component={App} />
    </Route>
  </Router>
), document.getElementById("app"));
