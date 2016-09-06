import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import * as GameActions from "../actions/GameActions";
import FilterType from "../components/filter-type.jsx";
import FilterRating from "../components/filter-rating.jsx";

export default class Filter extends Component {

  filterBy(category, value) {
    GameActions.filterGame(category, value);
  }

  render() {
    return(
      <div className="aside">

        <FilterType typeList={this.props.typeList} filterBy={this.filterBy} />

        <FilterRating ratingList={this.props.ratingList} filterBy={this.filterBy} />

        <div className="all filter-category">
          <Link to="/" onClick={() => this.filterBy('all', null)} className="filter-title" activeClassName="active">All</Link>
        </div>
      </div>
    )
  }
}

Filter.propTypes = {
  typeList: PropTypes.array.isRequired,
  ratingList: PropTypes.array.isRequired
}
