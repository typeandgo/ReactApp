import React from "react";
import * as GameActions from "../actions/GameActions";
import GameStore from "../stores/GameStore";

class Sort extends React.Component {

  constructor() {
    super();
    this.getSortDirection = this.getSortDirection.bind(this);
    this.state = {
      sort: GameStore.getSortDirection()
    }
  }

  getSortDirection() {
    this.setState({
      sort: GameStore.getSortDirection()
    })
  }

  componentWillMount() {
    GameStore.on("change", this.getSortDirection);
  }

  componentWillUnmount() {
    GameStore.removeListener("change", this.getSortDirection);
  }

  sortGame = () => {    
    GameActions.sortGame(!this.state.sort);
    //GameStore.sortGame(!this.state.sort);
  }

  render() {

    const text = this.state.sort ? "increase" : "decrease";

    let FilterInfo = (this.props.filterCategory) ? (
      <span className="game-sort__left-text">Filter by: {this.props.filterCategory} / {this.props.filterValue}</span>
    ) : "";

    return(
      <div className="game-sort">

        { FilterInfo }

        <span className="game-sort__right-text">
          Sort by: <a href="javascript:;" onClick={this.sortGame}>{text}</a>
        </span>
      </div>
    )
  }
}

export default Sort;
