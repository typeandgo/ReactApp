import React, {Component, PropTypes} from "react";
import * as GameActions from "../actions/GameActions";
import GameStore from "../stores/GameStore";

export default class Sort extends React.Component {

  constructor() {
    super();
    this.getSortDirection = this.getSortDirection.bind(this);
    this.state = {
      sort: GameStore.getSortDirection()
    }
  }

  componentWillMount() {
    GameStore.on("change", this.getSortDirection);
  }

  componentWillUnmount() {
    GameStore.removeListener("change", this.getSortDirection);
  }

  getSortDirection() {
    this.setState({
      sort: GameStore.getSortDirection()
    })
  }

  sortGame() {
    GameActions.sortGame(!this.state.sort);
  }

  render() {

    const text = this.state.sort ? "increase" : "decrease";

    let FilterInfo = (this.props.filterCategory) ? (
      <span className="game-sort__left-text">Filter by: {this.props.filterCategory} / {this.props.filterValue}</span>
    ) : <span className="game-sort__left-text">Filter by: All</span>;

    return(
      <div className="game-sort">

        { FilterInfo }

        <span className="game-sort__right-text">
          Sort by: <a href="javascript:;" onClick={() => this.sortGame()}>{text}</a>
        </span>
      </div>
    )
  }
}

Sort.propTypes = {
  filterCategory: PropTypes.string,
  filterValue: PropTypes.any
}
