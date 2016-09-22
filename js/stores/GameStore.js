import {ReduceStore} from "flux/utils";
import {Map, List} from "immutable";
import dispatcher from "../dispatcher";
import {GAME_ACTIONS} from "../actions/GameActions";

class GameStore extends ReduceStore {

  getInitialState() {
    return new Map({
      gameList: [
        {
          id: 1,
          title: "Super Mario",
          img: "/img/mario.jpg",
          type: "shooter",
          rating: 2
        },
        {
          id: 2,
          title: "Worms",
          img: "/img/worms.jpg",
          type: "strategy",
          rating: 3
        },
        {
          id: 3,
          title: "Bomberman",
          img: "/img/bomberman.jpg",
          type: "racing",
          rating: 4
        },
        {
          id: 4,
          title: "Pokemon",
          img: "/img/pikachu.png",
          type: "action",
          rating: 1
        },
        {
          id: 5,
          title: "Sonic",
          img: "/img/sonic.png",
          type: "racing",
          rating: 5
        },
        {
          id: 6,
          title: "Space Invader",
          img: "/img/space-invader.png",
          type: "racing",
          rating: 2
        },
        {
          id: 7,
          title: "Street Fighter",
          img: "/img/street-fighter.png",
          type: "action",
          rating: 4
        }
      ],
      filteredGameList: [],
      sortDirection: true,
      filterCategory: 'all',
      filterValue: null
    })
  }

  getAllGames() {
    return this.getState().get('gameList');
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

  filterGame(state, {category, value} = {action}){
    if(category){
      //console.log('filterGame - category', category);
      const filterBy = category.toLowerCase();

      return state.update('gameList', (gameList) => {
        switch(filterBy) {
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
      }).update('filterCategory', (filterCategory) => {
        return filterBy;
      }).update('filterValue', (filterValue) => {
        return value;
      })

    }else{
      return state.update('gameList', (gameList) => {
        return gameList;
      })
    }
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

  sortGame(state, {direction} = {action}) {
    return state.update('sortDirection', (sortDirection) => {
      direction = !this.getState().get('sortDirection');
      return direction;
    }).update('gameList', (gameList) => {
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

  getSortDirection() {
    return this.getState().get('sortDirection');
  }

  reduce(state, action) {
    switch(action.type) {
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
    }
  }
}

const gameStore = new GameStore(dispatcher);
export default gameStore;
