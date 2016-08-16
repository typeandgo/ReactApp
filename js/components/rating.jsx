import React from "react";
import * as GameActions from "../actions/GameActions";

class Rating extends React.Component {

  voteGame(e) {
    let rating = e.target.innerHTML;
    let id = this.props.gameId;
    GameActions.voteGame(id, rating);
  }

  render() {
    return(
      <span className={"game-rating rate-" + this.props.className}>
        <a href="javascript:;" className="star star-1" onClick={this.voteGame.bind(this)}>1</a>
        <a href="javascript:;" className="star star-2" onClick={this.voteGame.bind(this)}>2</a>
        <a href="javascript:;" className="star star-3" onClick={this.voteGame.bind(this)}>3</a>
        <a href="javascript:;" className="star star-4" onClick={this.voteGame.bind(this)}>4</a>
        <a href="javascript:;" className="star star-5" onClick={this.voteGame.bind(this)}>5</a>
      </span>
    )
  }
}

export default Rating;
