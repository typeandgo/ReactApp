import {ReduceStore} from "flux/utils";
import {Map, List} from "immutable";
import axios from "axios";
import dispatcher from "../dispatcher";
import {GAME_ACTIONS} from "../actions/GameActions";

let GAME_LIST;

class GameStore extends ReduceStore {

  /*******************************
  ** Initialisers ****************
  *******************************/

  getInitialState() {
    return new Map({
      gameList: [],
      sortDirection: true,
      filterCategory: 'all',
      filterValue: null,
      loading: true
    })
  }

  /*******************************
  ** Getters *********************
  *******************************/

  getGameList() {
    const state = this.getState();
    const gameList = state.get('gameList');
    const category = state.get('filterCategory').toLowerCase();
    const value = state.get('filterValue');

    switch(category) {
      case 'type': {
        return gameList.filter(function(item){
          return (item.type == value);
        });
      }
      case 'rating': {
        return gameList.filter(function(item){
          return (item.rating == value);
        });
      }
      case 'all': {
        return gameList;
      }
    }
  }

  getByType() {
    let categoryList = [];
    let counts = {};
    const gameList = this.getState().get('gameList');

    gameList.map(item => item['type']).map( function (a) {
      (a in counts) ? counts[a] ++ : counts[a] = 1;
    });

    for(let key in counts) {
      let item = { key: key, value: counts[key]};
      categoryList.push(item);
    }

    return this.sortAtoZ(categoryList);
  }

  getByRating() {
    let categoryList = [];
    let counts = {};
    const gameList = this.getState().get('gameList');

    gameList.map(item => item['rating']).map( function (a) {
      (a in counts) ? counts[a] ++ : counts[a] = 1;
    });

    for(let key in counts) {
      let item = { key: key, value: counts[key]};
      categoryList.push(item);
    }

    return categoryList.reverse();
  }

  getSortDirection() {
    return this.getState().get('sortDirection');
  }

  getLoading() {
    return this.getState().get('loading');
  }

  /*******************************
  ** Updaters ********************
  *******************************/

  loadGames(state, {category, value, gameList} = {action}) {
    return state.update('gameList', (gameData) => {
      return this.sortDecrease(gameList || []);
    })
    .update('filterCategory', (filterCategory) => {
      return !!category ? category : 'all';
    })
    .update('filterValue', (filterValue) => {
      return !!value ? value : null;
    })
    .update('loading', (loading) => {
      return false;
    })
  }

  loadExternalSource() {
    return axios.get('http://localhost:7000/js/data/data.json')
      .then(function(response) {
        return response.data.gameList;
      })
      .catch(function(error) {
        console.log('Ajax error: ', error);
      })
  }

  createGame(state, {title, kind} = {action}) {
    return state.update('gameList', (gameList) => {
      return gameList.concat({
        id: Date.now(),
        title: title,
        img: "/img/mario.jpg",
        type: kind,
        rating: 1
      })
    })
  }

  deleteGame(state, {id} = {action}) {
    return state.update('gameList', (gameList) => {
      return gameList.filter(game => game.id != id)
    })
  }

  voteGame(state, {id, rating} = {action}) {
    return state.update('gameList', (gameList) => {
      return gameList.map((item) => {
        if(item.id == id){
          item.rating = rating;
        }
        return item;
      })
    })
  }

  sortGame(state, {direction} = {action}) {
    return state.update('sortDirection', (sortDirection) => {
      direction = !this.getState().get('sortDirection');
      return direction;
    })
    .update('gameList', (gameList) => {
      switch(direction) {
        case true: {
          return gameList = this.sortIncrease(gameList);
        }
        case false: {
          return gameList = this.sortDecrease(gameList);
        }
      }
    })
  }

  filterGame(state, {category, value} = {action}){
    if(category){
      //console.log('filterGame - category', category);
      const filterBy = category.toLowerCase();
      return state.update('filterCategory', (filterCategory) => {
        return filterBy;
      })
      .update('filterValue', (filterValue) => {
        return value;
      })

    }else{
      return state.update('gameList', (gameList) => {
        return gameList;
      })
    }
  }

  /*******************************
  ** Helpers *********************
  *******************************/

  sortIncrease(data) {
    return data.sort(function(a,b) {
      return (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0)
    });
  }

  sortDecrease(data) {
    return data.sort(function(a,b) {
      return (b.rating > a.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0)
    });
  }

  sortAtoZ(data) {
    return data.sort(function(a,b) {
      return (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0)
    });
  }

  /*******************************
  ** Reducers ********************
  *******************************/

  reduce(state, action) {
    switch(action.type) {
      case GAME_ACTIONS.LOAD_GAMES: {
        return this.loadGames(state, action);
      }
      case GAME_ACTIONS.CREATE_GAME: {
        return this.createGame(state, action);
      }
      case GAME_ACTIONS.DELETE_GAME: {
        return this.deleteGame(state, action);
      }
      case GAME_ACTIONS.VOTE_GAME: {
        return this.voteGame(state, action);
      }
      case GAME_ACTIONS.FILTER_GAME: {
        return this.filterGame(state, action);
      }
      case GAME_ACTIONS.SORT_GAME: {
        return this.sortGame(state, action);
      }
      default:
        return state;
    }
  }
}

const gameStore = new GameStore(dispatcher);
export default gameStore;
