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
    let direction = this.state.sort ? "a-z" : "z-a";
    GameActions.calcSortDirection(direction);
  }

  render() {

    const text = this.state.sort ? "decrease" : "increase";

    let FilterInfo = (this.props.filterCategory) ? (
      <span className="game-sort__left-text">Filter by: {this.props.filterCategory} / {this.props.filterValue}</span>
    ) : "";

    return(
      <div className="game-sort">

        {FilterInfo}
        
        <span className="game-sort__right-text">
          Sort by: <a href="javascript:;" onClick={this.handleClick.bind(this)}>{text}</a>
        </span>
      </div>
    )
  }
}

export default Sort;
