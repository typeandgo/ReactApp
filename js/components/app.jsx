import React, {Component, PropTypes} from "react";
import {Container} from 'flux/utils';
import {Link} from "react-router";
import GameStore from "../stores/GameStore";
import * as GameActions from "../actions/GameActions";
import Filter from "../components/filter.jsx";
import List from "../components/list.jsx";


class App extends Component {

  static getStores() {
    return [GameStore];
  }

  static calculateState(prevState) {
    return {
      gameList: GameStore.getAllGames(),
      typeList: GameStore.getByType(),
      ratingList: GameStore.getByRating(),
      sortDirection: GameStore.getSortDirection()
    };
  }

  componentWillMount() {
    const {filterCategory, filterValue} = this.props.params;
    GameActions.filterGame(filterCategory, filterValue);
  }

  render() {
    const {filterCategory, filterValue} = this.props.params;
    const {gameList, typeList, ratingList, sortDirection} = this.state;

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
            sortDirection={sortDirection}
          />
        </div>
    )
  }
}

const appContainer = Container.create(App);
export default appContainer;

App.propTypes = {
  filterCategory: PropTypes.string,
  filterValue: PropTypes.any
}
