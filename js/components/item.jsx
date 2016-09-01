import React from "react";
import Rating from "../components/rating.jsx";
import * as GameActions from "../actions/GameActions";
import GameStore from "../stores/GameStore";

class Item extends React.Component {

  deleteGame(id) {
    GameActions.deleteGame(id);
  }

  render() {
    const {id, title, img, type, rating} = this.props;

    return(
      <li className="game-list__li" id={id}>
        <img className="game-image" src={img} />
        <span className="game-name">{title} | <span className="game-type">{type}</span></span>
        <Rating className={rating} gameId={id} />
        <a href="javascript:;" onClick={() => this.deleteGame(id)} className="game-remove">x</a>
      </li>
    )
  }
}

export default Item;
