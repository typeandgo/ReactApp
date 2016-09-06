import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import GameStore from "../stores/GameStore";
import Filter from "../components/filter.jsx";
import List from "../components/list.jsx";


export default class App extends React.Component {

  constructor() {
    super();
    this.getGames = this.getGames.bind(this);
    this.state = {
      gameList: GameStore.getAllGames(),
      typeList: GameStore.getByType(),
      ratingList: GameStore.getByRating()
    }
  }

  componentWillMount() {
    GameStore.on("change", this.getGames);
  }

  componentWillUnmount() {
    GameStore.removeListener("change", this.getGames);
  }

  getGames() {
    this.setState({
      gameList: GameStore.getAllGames(),
      typeList: GameStore.getByType(),
      ratingList: GameStore.getByRating()
    })
  }

  render() {
    const {filterCategory, filterValue} = this.props.params;
    const {gameList, typeList, ratingList} = this.state;

    return (
        <div className="container">

          <Filter
            typeList={typeList}
            ratingList={ratingList}
            filterCategory={filterCategory}
            filterValue={filterValue}
          />

          <List
            gameList={gameList}
            filterCategory={filterCategory}
            filterValue={filterValue}
          />
        </div>
    )
  }
}

App.propTypes = {
  filterCategory: PropTypes.string,
  filterValue: PropTypes.any
}
