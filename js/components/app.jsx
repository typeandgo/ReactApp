import React from "react";
import {Link} from "react-router";
import Filter from "../components/filter.jsx";
import List from "../components/list.jsx";


class App extends React.Component {
  render() {

    const {filterCategory, filterValue} = this.props.params;

    return (
      <div className="container">
            <div className="container">

              <Filter filterCategory={filterCategory} filterValue={filterValue} />

              <List filterCategory={filterCategory} filterValue={filterValue} />
            </div>
      </div>
    )
  }
}

export default App;
