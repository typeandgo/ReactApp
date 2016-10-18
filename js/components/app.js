import React, {Component, PropTypes} from "react";
import {Container} from 'flux/utils';
import {Link} from "react-router";
import GameStore from "../stores/GameStore";
import * as GameActions from "../actions/GameActions";
import Filter from "../components/filter";
import List from "../components/list";


class App extends Component {

  static getStores() {
    return [GameStore];
  }

  static calculateState(prevState) {
    return {
      gameList: GameStore.getGameList(),
      typeList: GameStore.getByType(),
      ratingList: GameStore.getByRating(),
      sortDirection: GameStore.getSortDirection(),
      loading: GameStore.getLoading()
    };
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      gameList: GameStore.getGameList(),
      typeList: GameStore.getByType(),
      ratingList: GameStore.getByRating(),
      sortDirection: GameStore.getSortDirection(),
      loading: GameStore.getLoading()
    }
  }

  componentWillMount() {
    // Simulate real-time data loading
    setTimeout(function(){
      const {filterCategory, filterValue} = this.props.params;

      GameStore.loadExternalSource().then(response => {
        if(!response){
          alert('Data can not read!');
        }
        GameActions.loadGames(response, filterCategory, filterValue);
      });

    }.bind(this),1000)
  }

  render() {
    const {filterCategory, filterValue} = this.props.params;
    let {gameList, typeList, ratingList, sortDirection, loading} = this.state;

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
            loading={loading}
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
