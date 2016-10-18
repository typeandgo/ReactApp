import React, {Component, PropTypes} from "react";
import Item from "../components/item"
import Sort from "../components/sort";
import Add from "../components/add";

export default class List extends Component {

  render() {
    const {gameList, filterCategory, filterValue, sortDirection, loading} = this.props;

    let GameList;

    if(loading){
      GameList= <li className="game-list__li--loading">Games are loading... Please wait.</li>
    }else{
      GameList= gameList.map((item, i) => {
        return <Item key={i} {...item} />
      });
    }

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
  sortDirection: PropTypes.bool,
  loading: PropTypes.bool
}
