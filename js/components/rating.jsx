import React, {Component, PropTypes} from "react";
import * as GameActions from "../actions/GameActions";

export default class Rating extends React.Component {

  voteGame(rating) {
    const id = this.props.gameId;
    GameActions.voteGame(id, rating);
  }

  render() {
    return(
      <span className={"game-rating rate-" + this.props.className}>
        <a href="javascript:;" className="star star-1" onClick={() => this.voteGame(1)}>☆</a>
        <a href="javascript:;" className="star star-2" onClick={() => this.voteGame(2)}>☆</a>
        <a href="javascript:;" className="star star-3" onClick={() => this.voteGame(3)}>☆</a>
        <a href="javascript:;" className="star star-4" onClick={() => this.voteGame(4)}>☆</a>
        <a href="javascript:;" className="star star-5" onClick={() => this.voteGame(5)}>☆</a>
      </span>
    )
  }
}

Rating.propTypes = {
  id: PropTypes.number,
  className: PropTypes.number
}
