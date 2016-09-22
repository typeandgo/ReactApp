import React, {Component, PropTypes} from "react";
import Item from "../components/item.jsx"
import Sort from "../components/sort.jsx";
import Add from "../components/add.jsx";

export default class List extends Component {

  render() {
    //console.log('List - props', this.props);
    const {gameList, filterCategory, filterValue, sortDirection} = this.props;

    const GameList = gameList.map((item, i) => {
      return <Item key={i} {...item} />
    });

    return(
      <div className="content">

        <Sort filterCategory={filterCategory} filterValue={filterValue} sortDirection={sortDirection} />

        <div className="game-list">
          <ul className="game-list__ul">

            { GameList }

          </ul>
        </div>

        <Add />

      </div>
    )
  }
}

List.propTypes = {
  gameList: PropTypes.array.isRequired,
  filterCategory: PropTypes.string,
  filterValue: PropTypes.any,
  sortDirection: PropTypes.bool
}
