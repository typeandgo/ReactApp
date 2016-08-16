import React, {Component, PropTypes} from "react";
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
    let byKind = e.target.attributes.getNamedItem('data-type').value;
    GameActions.filterByType(byKind);
  }

  componentWillMount() {
    GameStore.on("change", this.getTypes)
  }

  componentWillUnmount() {
    GameStore.removeListener("change", this.getTypes);
  }

  render() {

    const {typeList} = this.state;

    const TypeList = typeList.map((item, i) => {
      return (
        <li key={i}>
          <a href="javascript:;" onClick={this.filterByType.bind(this)} data-type={item.type}>{item.type} (<span>{item.count}</span>)</a>
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
