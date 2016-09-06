import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import * as GameActions from "../actions/GameActions";

export default class Add extends React.Component {

  createGame(e) {
    e.preventDefault();
    let title = ReactDOM.findDOMNode(this.refs.gameTitle).value;
    let kind = ReactDOM.findDOMNode(this.refs.gameType).value.toLowerCase();

    if(title.length >= 1 && kind.length >= 1){
      GameActions.createGame(title, kind);
      this.clearInputs();
    }
  }

  clearInputs() {
    ReactDOM.findDOMNode(this.refs.gameTitle).value = "";
    ReactDOM.findDOMNode(this.refs.gameType).value = "";
  }

  render() {
    return(
      <div className="game-add">
          <form onSubmit={(e) => this.createGame(e)}>
            <label className="game-add__label">Title</label>
            <input ref="gameTitle" type="text" className="game-add__input" />
            <label className="game-add__label">Type</label>
            <input ref="gameType" type="text" className="game-add__input" />
            <button className="game-add__button" type="submit">Create</button>
          </form>
      </div>
    )
  }
}
