import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import * as GameActions from "../actions/GameActions";
import GameStore from "../stores/GameStore";

class FilterRating extends Component {

  constructor() {
    super();
    this.getRatings = this.getRatings.bind(this);
    this.state = {
      ratingList: GameStore.getAllRatings()
    }
  }

  getRatings() {
    this.setState({
      ratingList: GameStore.getAllRatings()
    })
  }

  filterByRating(e) {
    let value = e.target.attributes.getNamedItem('data-rating').value;
    GameActions.filterGame("rating", value);
  }

  componentWillMount() {
    GameStore.on("change", this.getRatings);
  }

  componentWillUnmount() {
    GameStore.removeListener("change", this.getRatings)
  }

  render() {

    const {ratingList} = this.state;

    const RatingList = ratingList.map((item, i) => {
      return (
        <li key={i}>
          <Link to={"/filter/Rating/" + item.rating} onClick={this.filterByRating.bind(this)} data-rating={item.rating}>{item.rating} Stars (<span>{item.count}</span>)</Link>
        </li>
      )
    });

    return(
      <div className="by-type filter-category">
        <div className="filter-title">By Rating</div>
        <ul>

          {RatingList}

        </ul>
      </div>
    )
  }
}

export default FilterRating;
