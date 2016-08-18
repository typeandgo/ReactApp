import React from "react";
import ReactDom from "react-dom";
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import App from "./components/app.jsx";

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/filter/:filterCategory/:filterValue" component={App} />
    </Route>
  </Router>
), document.getElementById("app"));
