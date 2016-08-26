import {EventEmitter} from "events";
import dispatcher from "../dispatcher";
import {GAME_ACTIONS} from "../actions/GameActions";

class GameStore extends EventEmitter {
  constructor() {
    super();

    this.gameList = [
      {
        id: 1,
        title: "B Video Game Lorem Ipsum 1",
        img: "/img/mario.jpg",
        type: "Shooter",
        rating: 2
      },
      {
        id: 2,
        title: "A Video Game Lorem Ipsum 2",
        img: "/img/worms.jpg",
        type: "Strategy",
        rating: 3
      },
      {
        id: 3,
        title: "C Video Game Lorem Ipsum 3",
        img: "/img/bomberman.jpg",
        type: "Racing",
        rating: 4
      },
      {
        id: 4,
        title: "D Video Game Lorem Ipsum 4",
        img: "/img/pikachu.png",
        type: "Action",
        rating: 1
      },
      {
        id: 5,
        title: "E Video Game Lorem Ipsum 5",
        img: "/img/sonic.png",
        type: "Racing",
        rating: 5
      },
      {
        id: 6,
        title: "F Video Game Lorem Ipsum 6",
        img: "/img/tombrider.jpg",
        type: "Racing",
        rating: 2
      }
    ];

    this.filteredGameList = this.gameList;

    this.typeList = [];

    this.ratingList = [];

    this.sortDirection = "increase";


    this.calcByType();
    this.calcByRating();
    this.sortGame();
  }

  createGame(title, kind) {
    if(title.length >= 1 && kind.length >= 1) {
      this.gameList.push({
        id: Date.now(),
        title: title,
        img: "img/mario.jpg",
        type: kind,
        rating: 1
      });

      this.filteredGameList = this.gameList;
      this.calcByType();
      this.calcByRating();
      this.sortGame();
      this.emit("change");
    }
  }

  deleteGame(id) {
    this.gameList = this.gameList.filter(game => game.id != id);
    this.filteredGameList = this.gameList;
    this.calcByType();
    this.calcByRating();
    this.emit("change");
  }

  getAllGames() {
    return this.filteredGameList;
  }

  /*------*/

  filterGame(category, value){
    if(category){
      if(category.toLowerCase() == "type") {
        this.filterByType(value);
      }else if(category.toLowerCase() == "rating") {
        this.filterByRating(value);
      }
    }
  }

  /*------*/

  calcByType() {
    /* TODO: Make more simple */
    this.typeList = [];
    let typeObj = {};
    this.gameList.map(item => item.type).map( function (a) {
      if (a in typeObj) typeObj[a] ++;
      else typeObj[a] = 1;
    });

    for(let key in typeObj) {
      let item = {
        type: key,
        count: typeObj[key]
      };
      this.typeList.push(item);
    }
    //console.log(this.typeList);
  }

  filterByType(byKind) {
    this.filteredGameList = this.gameList.filter(function(item){
      return (item.type == byKind);
    });
    this.sortGame();
  }

  getAllTypes() {
    return this.typeList;
  }

  /*------*/

  calcByRating() {
    //console.log('Rating');
    /* TODO: Make more simple */
    this.ratingList = [];
    let ratingObj = {};
    this.gameList.map(item => item.rating).map( function (a) {
      if (a in ratingObj) ratingObj[a] ++;
      else ratingObj[a] = 1;
    });

    for(let key in ratingObj) {
      let item = {
        rating: parseInt(key),
        count: ratingObj[key]
      };
      this.ratingList.push(item);
    }

    this.ratingList.reverse();
    //console.log(this.ratingList);
  }

  filterByRating(byRating) {
    this.filteredGameList = this.gameList.filter(function(item){
      return (item.rating == byRating);
    });
    this.sortGame();
  }

  getAllRatings() {
    return this.ratingList;
  }

  /*------*/

  voteGame(id, rating) {
    if(typeof id != 'undefined' && typeof rating != 'undefined'){
      let index = this.gameList.findIndex(item => item.id == id);
      this.gameList[index].rating = rating;
      this.calcByRating();
      this.emit("change");
    }
  }

  /*------*/

  filterAll() {
    this.filteredGameList = this.gameList;
    this.sortGame();
  }

  /*------*/

  sortIncrease(listData) {
    return listData.sort(function(a,b) {
      return (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0)
    });
  }

  sortDecrease(listData) {
    return listData.sort(function(a,b) {
      return (b.rating > a.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0)
    });
  }

  calcSortDirection(direction) {
    if(typeof direction != "undefined"){
      this.sortDirection = direction;
      this.sortGame();
    }
  }

  sortGame() {
    if(this.sortDirection == "increase"){
      this.filteredGameList = this.sortIncrease(this.filteredGameList);
    }else {
      this.filteredGameList = this.sortDecrease(this.filteredGameList);
    }
    this.emit("change");
  }

  /*------*/

  handleActions(action) {
    switch(action.type) {
      case GAME_ACTIONS.CREATE_GAME: {
        this.createGame(action.title, action.kind);
      }
      case GAME_ACTIONS.DELETE_GAME: {
        this.deleteGame(action.id);
      }
      case GAME_ACTIONS.VOTE_GAME: {
        this.voteGame(action.id, action.rating);
      }
      case GAME_ACTIONS.FILTER_GAME: {
        this.filterGame(action.category, action.value);
      }
      case GAME_ACTIONS.SORT_GAME: {
        this.calcSortDirection(action.direction);
      }
    }
  }
}

const gameStore = new GameStore;
dispatcher.register(gameStore.handleActions.bind(gameStore));
export default gameStore;


/*
* TODO:
* Change filter algoritm, make more simple
* Re-organize file system
* Write unit tests
**/
