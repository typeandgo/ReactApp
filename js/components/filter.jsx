import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import * as GameActions from "../actions/GameActions";

class Filter extends Component {

  filterBy = (e) => {
    let category = e.target.attributes.getNamedItem('data-category').value;
    let value = e.target.attributes.getNamedItem('data-value').value;
    GameActions.filterGame(category, value);
  }

  render() {
    const {typeList, ratingList} = this.props

    const TypeList = typeList.map((item, i) => {
      return (
        <li key={i}>
          <Link to={"/filter/Type/" + item.key} onClick={this.filterBy} data-category="type" data-value={item.key}>
            {item.key} (<span>{item.value}</span>)
          </Link>
        </li>
      )
    });

    const RatingList = ratingList.map((item, i) => {
      return (
        <li key={i}>
          <Link to={"/filter/Rating/" + item.key} onClick={this.filterBy} data-category="rating" data-value={item.key}>
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
          <Link to="/" onClick={this.filterBy} data-category="all" data-value="all" className="filter-title">All</Link>
        </div>
      </div>
    )
  }
}

export default Filter;
