import React, {Component, PropTypes} from "react";
import FilterType from "../components/filter-type.jsx";
import FilterRating from "../components/filter-rating.jsx";
import GameStore from "../stores/GameStore";

class Filter extends Component {

  filterAll() {
    GameStore.filterAll();
  }

  render() {
    return(
      <div className="aside">

        <FilterType />

        <FilterRating />

        <div className="all filter-category">
          <a href="javascript:;" onClick={this.filterAll.bind(this)} className="filter-title">All</a>
        </div>
      </div>
    )
  }
}

export default Filter;
