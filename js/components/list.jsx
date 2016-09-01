import React from "react";
import * as GameActions from "../actions/GameActions";
import Item from "../components/item.jsx"
import Sort from "../components/sort.jsx";
import Add from "../components/add.jsx";

class List extends React.Component {

  componentWillMount() {
    GameActions.filterGame(this.props.filterCategory, this.props.filterValue);
  }

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

export default List;
