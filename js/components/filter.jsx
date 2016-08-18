import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import FilterType from "../components/filter-type.jsx";
import FilterRating from "../components/filter-rating.jsx";
import GameStore from "../stores/GameStore";

class Filter extends Component {

  constructor(props) {
    super();
  }

  componentWillMount() {
    GameStore.filterGame(this.props.filterCategory, this.props.filterValue);
  }

  filterAll() {
    GameStore.filterAll();
  }

  render() {
    return(
      <div className="aside">

        <FilterType filterValue={this.props.filterValue} />

        <FilterRating filterValue={this.props.filterValue} />

        <div className="all filter-category">
          <Link to="/" onClick={this.filterAll.bind(this)} className="filter-title">All</Link>
        </div>
      </div>
    )
  }
}

export default Filter;
