import React, {Component, PropTypes} from "react";
import {Container} from 'flux/utils';
import * as GameActions from "../actions/GameActions";

export default class Sort extends Component {

  sortGame = (sortDirection) => {
    GameActions.sortGame(!sortDirection);
  }

  render() {

    const {sortDirection, filterCategory, filterValue} = this.props

    const text = sortDirection ? "increase" : "decrease";

    let FilterInfo = (this.props.filterCategory) ? (
      <span className="game-sort__left-text">Filter by: {filterCategory} / {filterValue}</span>
    ) : <span className="game-sort__left-text">Filter by: All</span>;

    return(
      <div className="game-sort">

        { FilterInfo }

        <span className="game-sort__right-text">
          Sort by: <a href="javascript:;" onClick={() => this.sortGame(sortDirection)}>{text}</a>
        </span>
      </div>
    )
  }
}

Sort.propTypes = {
  filterCategory: PropTypes.string,
  filterValue: PropTypes.any,
  sortDirection: PropTypes.bool
}
