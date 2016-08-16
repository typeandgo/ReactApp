import React from "react";
import Filter from "../components/filter.jsx";
import List from "../components/list.jsx";


class App extends React.Component {
  render() {
    return (
      <div className="container">

        <Filter />

        <List />

      </div>
    )
  }
}

export default App;
