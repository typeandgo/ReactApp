import React from "react";
import * as GameActions from "../actions/GameActions";

class Sort extends React.Component {

  constructor() {
    super();
    this.state = {
      sort: false
    }
  }

  handleClick() {
    this.setState({sort: !this.state.sort});
    const direction = this.state.sort ? "a-z" : "z-a";
    GameActions.calcSortDirection(direction);
  }

  render() {

    const text = this.state.sort ? "decrease" : "increase";

    return(
      <div className="game-sort">
        Sort by: <a href="javascript:;" onClick={this.handleClick.bind(this)}>{text}</a>
      </div>
    )
  }
}

export default Sort;
