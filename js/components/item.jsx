import React from "react";
import Rating from "../components/rating.jsx";
import * as GameActions from "../actions/GameActions";
import GameStore from "../stores/GameStore";

class Item extends React.Component {

  deleteGame = () => {
    let id = this.props.id;
    GameActions.deleteGame(id);    
  }

  render() {
    return(
      <li className="game-list__li" id={this.props.id}>
        <img className="game-image" src={this.props.img} />
        <span className="game-name">{this.props.title} | <span className="game-type">{this.props.type}</span></span>
        <Rating className={this.props.rating} gameId={this.props.id} />
        <a href="javascript:;" onClick={this.deleteGame} className="game-remove">x</a>
      </li>
    )
  }
}

export default Item;
