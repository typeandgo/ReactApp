import {EventEmitter} from "events";
import dispatcher from "../dispatcher";
import {GAME_ACTIONS} from "../actions/GameActions";

class GameStore extends EventEmitter {
  constructor() {
    super();

    this.gameList = [
      {
        id: 1,
        title: "Super Mario",
        img: "/img/mario.jpg",
        type: "Shooter",
        rating: 2
      },
      {
        id: 2,
        title: "Worms",
        img: "/img/worms.jpg",
        type: "Strategy",
        rating: 3
      },
      {
        id: 3,
        title: "Bomberman",
        img: "/img/bomberman.jpg",
        type: "Racing",
        rating: 4
      },
      {
        id: 4,
        title: "Pokemon",
        img: "/img/pikachu.png",
        type: "Action",
        rating: 1
      },
      {
        id: 5,
        title: "Sonic",
        img: "/img/sonic.png",
        type: "Racing",
        rating: 5
      },
      {
        id: 6,
        title: "Space Invader",
        img: "/img/space-invader.png",
        type: "Racing",
        rating: 2
      },
      {
        id: 7,
        title: "Street Fighter",
        img: "/img/street-fighter.png",
        type: "Action",
        rating: 4
      }
    ];
    this.filteredGameList = this.gameList;
    this.sortDirection = true;
  }

  createGame(title, kind) {
    this.gameList.push({
      id: Date.now(),
      title: title,
      img: "/img/mario.jpg",
      type: kind,
      rating: 1
    });
    this.emit("change");
  }

  deleteGame(id) {
    this.gameList = this.gameList.filter(game => game.id != id);
    this.filteredGameList = this.filteredGameList.filter(game => game.id != id);
    this.emit("change");
  }

  getAllGames() {
    let data = (this.filteredGameList.length > 0) ? this.filteredGameList : this.gameList;

    switch(this.sortDirection) {
      case true: {
        return data = this.sortIncrease(data);
        break;
      }
      case false: {
        return data = this.sortDecrease(data);
        break;
      }
    }
  }

  filterGame(category, value){
    if(category) {
      switch(category.toLowerCase()) {
        case 'type': {
          this.filteredGameList = this.gameList.filter(function(item){
            return (item.type == value);
          });
          this.emit("change");
          break;
        }
        case 'rating': {
          this.filteredGameList = this.gameList.filter(function(item){
            return (item.rating == value);
          });
          this.emit("change");
          break;
        }
        case 'all': {
          this.filteredGameList = this.gameList;
          this.emit("change");
          break;
        }
      }
    }else {
      this.filteredGameList = this.gameList;
      this.emit("change");
    }
  }

  getByType() {
    let categoryList = [];
    let counts = {};

    this.gameList.map(item => item['type']).map( function (a) {
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

    this.gameList.map(item => item['rating']).map( function (a) {
      (a in counts) ? counts[a] ++ : counts[a] = 1;
    });

    for(let key in counts) {
      let item = { key: key, value: counts[key]};
      categoryList.push(item);
    }

    return categoryList.reverse();
  }

  voteGame(id, rating) {
    let index = this.gameList.findIndex(item => item.id == id);
    this.gameList[index].rating = rating;
    this.emit("change");
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

  sortGame(direction) {
    this.sortDirection = direction;

    switch(direction) {
      case true: {
        this.gameList = this.sortIncrease(this.gameList);
        this.emit('change');
        break;
      }
      case false: {
        this.gameList = this.sortDecrease(this.gameList);
        this.emit('change');
        break;
      }
    }
  }

  getSortDirection() {
    return this.sortDirection;
  }

  handleActions(action) {
    switch(action.type) {
      case GAME_ACTIONS.CREATE_GAME: {
        this.createGame(action.title, action.kind);
        break;
      }
      case GAME_ACTIONS.DELETE_GAME: {
        this.deleteGame(action.id);
        break;
      }
      case GAME_ACTIONS.VOTE_GAME: {
        this.voteGame(action.id, action.rating);
        break;
      }
      case GAME_ACTIONS.FILTER_GAME: {
        this.filterGame(action.category, action.value);
        break;
      }
      case GAME_ACTIONS.SORT_GAME: {
        this.sortGame(action.direction);
        break;
      }
    }
  }
}

const gameStore = new GameStore;
dispatcher.register(gameStore.handleActions.bind(gameStore));
export default gameStore;
