import React, {Component, PropTypes} from "react";
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
    let byRating = e.target.attributes.getNamedItem('data-rating').value;
    GameActions.filterByRating(byRating);
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
          <a href="javascript:;" onClick={this.filterByRating.bind(this)} data-rating={item.rating}>{item.rating} Stars (<span>{item.count}</span>)</a>
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
