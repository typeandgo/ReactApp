import React, {Component, PropTypes} from "react";
import Item from "../components/item.jsx"
import Sort from "../components/sort.jsx";
import Add from "../components/add.jsx";

export default class List extends React.Component {
  render() {  
    const {gameList, filterCategory, filterValue} = this.props;
    const GameList = gameList.map((item, i) => {
      return <Item key={i} {...item} />
    });

    return(
      <div className="content">

        <Sort filterCategory={filterCategory} filterValue={filterValue} />

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
  filterValue: PropTypes.any
}
