import React, {Component, PropTypes} from "react";
import {Link} from "react-router";

export default class FilterRating extends Component {

  render() {

    const RatingList = this.props.ratingList.map((item, i) => {
      return (
        <li key={i}>
          <Link to={"/filter/Rating/" + item.key} onClick={() => this.props.filterBy('rating', item.key)} activeClassName="active">
            {item.key} Stars (<span>{item.value}</span>)
          </Link>
        </li>
      )
    });

    return(
      <div className="by-rating filter-category">
        <div className="filter-title">By Rating</div>
        <ul>

          { RatingList }

        </ul>
      </div>
    )
  }
}

FilterRating.propTypes = {
  ratingList: PropTypes.array.isRequired
}
