import {ReduceStore} from "flux/utils";
import {Map, List} from "immutable";
import * as Helpers from "../helpers/helperFunctions";
import GameStore from "./GameStore";
import * as GameActions from "../actions/GameActions";
import {expect} from "chai";
import sinon from "sinon";

let mockData;
let timer = sinon.useFakeTimers();

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

  it('Should have at least 2 item in data', () => {
      expect(GameStore.getState().get('gameList').length).to.equal(2);
  });

  it('Should have at least 3 items after new game created', () => {
      GameActions.createGame('title', 'type');
      let gameList = GameStore.getState().get('gameList');
      expect(gameList.length).to.equal(3);
  });

  it('Should have 1 items after a game deleted', () => {
      GameActions.deleteGame(1);
      let gameList = GameStore.getState().get('gameList');
      expect(gameList.length).to.equal(1);
  });

  it('Should have 5 stars after first game voted', () => {
      GameActions.voteGame(1, 5);
      let gameList = GameStore.getState().get('gameList');
      expect(GameStore.getState().get('gameList')[0]['rating']).to.equal(5);
  });

  it('Should be first elements id=2 after sorting', () => {
    timer.tick( 1000 );

    GameActions.sortGame(false);
    let gameList = GameStore.getState().get('gameList');
    console.log(gameList[0]);
    expect(gameList[0]['id']).to.equal(2);

    timer.restore();
  });

  it.skip('Should return element id=2 after filtering', () => {
      /*
      GameActions.filterGame('type', 'strategy');
      let gameList = GameStore.getState().get('gameList');
      console.log(gameList[0]);
      expect(gameList[0]['id']).to.equal(2);
      */
  });


})
