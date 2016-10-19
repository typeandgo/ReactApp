import {ReduceStore} from "flux/utils";
import {Map, List} from "immutable";
import * as Helpers from "../helpers/helperFunctions";
import GameStore from "./GameStore";
import * as GameActions from "../actions/GameActions";
import {expect} from "chai";
import sinon from "sinon";

let mockData;

describe('GameStore Tests', () => {

  beforeEach(() => {
    mockData = [{
      "id": 1,
      "title": "Super Mario",
      "img": "/img/mario.jpg",
      "type": "shooter",
      "rating": 4
    },{
      "id": 2,
      "title": "Worms",
      "img": "/img/worms.jpg",
      "type": "strategy",
      "rating": 3
    }];

    GameActions.loadGames(mockData, 'all', null);
  });

  it('1. Should have at least 2 item in data', () => {
      let gameList = GameStore.getState().get('gameList');
      expect(gameList.length).to.equal(2);
  });

  it('2. Should have at least 3 items after new game created', () => {
      GameActions.createGame('engin', 'action');
      let gameList = GameStore.getState().get('gameList');
      expect(gameList.length).to.equal(3);
  });

  it('3. Should have 1 items after a game deleted', () => {
      GameActions.deleteGame(1);
      let gameList = GameStore.getState().get('gameList');
      expect(gameList.length).to.equal(1);
  });

  it('4. Should have 5 stars after first game voted', () => {
      GameActions.voteGame(1, 5);
      let gameList = GameStore.getState().get('gameList');
      expect(gameList[0]['rating']).to.equal(5);
  });

  it('5. Should return element rating=3 after filtering', () => {
      GameActions.filterGame('rating', 3);
      let gameList = GameStore.getGameList();
      expect(gameList[0]['rating']).to.equal(3);
  });

  it('6. Should be first elements id=2 after sorting by rate', () => {
      GameActions.sortGame(true); // true: increase
      let gameList = GameStore.getState().get('gameList');
      expect(gameList[0]['id']).to.equal(2);
  });

})
