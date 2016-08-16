import React from "react";
import ReactDOM from "react-dom";
import * as GameActions from "../actions/GameActions";

class Add extends React.Component {

  createGame(){
    let title = ReactDOM.findDOMNode(this.refs.gameTitle).value;
    let kind = ReactDOM.findDOMNode(this.refs.gameType).value;
    GameActions.createGame(title, kind);
    this.clearInputs();
  }

  clearInputs() {
    ReactDOM.findDOMNode(this.refs.gameTitle).value = "";
    ReactDOM.findDOMNode(this.refs.gameType).value = "";
  }

  render() {
    return(
      <div className="game-add">
        <label className="game-add__label">Title</label>
        <input ref="gameTitle" type="text" className="game-add__input" />
        <label className="game-add__label">Type</label>
        <input ref="gameType" type="text" className="game-add__input" />
        <button className="game-add__button" onClick={this.createGame.bind(this)}>Create</button>
      </div>
    )
  }
}

export default Add;
