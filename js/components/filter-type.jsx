import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import * as GameActions from "../actions/GameActions";
import GameStore from "../stores/GameStore";

class FilterType extends Component {

  constructor() {
    super();
    this.getTypes = this.getTypes.bind(this);
    this.state = {
      typeList: GameStore.getAllTypes()
    }
  }

  getTypes() {
    this.setState({
      typeList: GameStore.getAllTypes()
    })
  }

  filterByType(e) {
    let value = e.target.attributes.getNamedItem('data-type').value;
    GameActions.filterGame("type", value);
  }

  componentWillMount() {
    GameStore.on("change", this.getTypes);
  }

  componentWillUnmount() {
    GameStore.removeListener("change", this.getTypes);
  }

  render() {

    const {typeList} = this.state;

    const TypeList = typeList.map((item, i) => {
      return (
        <li key={i}>
          <Link to={"/filter/Type/" + item.type} onClick={this.filterByType.bind(this)} data-type={item.type}>{item.type} (<span>{item.count}</span>)</Link>
        </li>
      )
    });

    return(
      <div className="by-type filter-category">
        <div className="filter-title">By Type</div>
        <ul>

          {TypeList}

        </ul>
      </div>
    )
  }
}

export default FilterType;
