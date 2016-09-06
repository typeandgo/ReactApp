import React, {Component, PropTypes} from "react";
import Rating from "../components/rating.jsx";
import * as GameActions from "../actions/GameActions";
import * as Helpers from "../helpers/toTitleCase";

export default class Item extends React.Component {

  deleteGame(id) {
    GameActions.deleteGame(id);
  }

  render() {
    const {id, title, img, type, rating} = this.props;

    return(
      <li className="game-list__li" id={id}>
        <img className="game-image" src={img} />
        <span className="game-name">{title} | <span className="game-type">{Helpers.toTitleCase(type)}</span></span>
        <Rating className={rating} gameId={id} />
        <a href="javascript:;" onClick={() => this.deleteGame(id)} className="game-remove">x</a>
      </li>
    )
  }
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
