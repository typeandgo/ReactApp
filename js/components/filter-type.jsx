import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import * as Helpers from "../helpers/helperFunctions";

export default class FilterType extends Component {

  render() {

    const TypeList = this.props.typeList.map((item, i) => {
      return (
        <li key={i}>
          <Link to={"/filter/Type/" + item.key} onClick={() => this.props.filterBy('type', item.key)} activeClassName="active">
            {Helpers.toTitleCase(item.key)} (<span>{item.value}</span>)
          </Link>
        </li>
      )
    });

    return(
      <div className="by-type filter-category">
        <div className="filter-title">By Type</div>
        <ul>

          { TypeList }

        </ul>
      </div>
    )
  }
}

FilterType.propTypes = {
  typeList: PropTypes.array.isRequired
}
