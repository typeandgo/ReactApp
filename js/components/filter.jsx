import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import * as GameActions from "../actions/GameActions";

export default class Filter extends Component {

  filterBy(category, value) {
    GameActions.filterGame(category, value);
  }

  render() {
    const {typeList, ratingList} = this.props

    const TypeList = typeList.map((item, i) => {
      return (
        <li key={i}>
          <Link to={"/filter/Type/" + item.key} onClick={() => this.filterBy('type', item.key)} activeClassName="active">
            {item.key} (<span>{item.value}</span>)
          </Link>
        </li>
      )
    });

    const RatingList = ratingList.map((item, i) => {
      return (
        <li key={i}>
          <Link to={"/filter/Rating/" + item.key} onClick={() => this.filterBy('rating', item.key)} activeClassName="active">
            {item.key} Stars (<span>{item.value}</span>)
          </Link>
        </li>
      )
    });

    return(
      <div className="aside">

        <div className="by-type filter-category">
          <div className="filter-title">By Type</div>
          <ul>

            { TypeList }

          </ul>
        </div>

        <div className="by-type filter-category">
          <div className="filter-title">By Rating</div>
          <ul>

            { RatingList }

          </ul>
        </div>

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
