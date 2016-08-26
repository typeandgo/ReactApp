import React from "react";
import Item from "../components/item.jsx"
import Sort from "../components/sort.jsx";
import Add from "../components/add.jsx";
import GameStore from "../stores/GameStore";

class List extends React.Component {

  constructor() {
    super();
    this.getGames = this.getGames.bind(this);
    this.state = {
      gameList: GameStore.getAllGames()
    }
  }

  getGames() {
    this.setState({
      gameList: GameStore.getAllGames()      
    })
  }

  componentWillMount() {
    GameStore.on("change", this.getGames)
  }

  componentWillUnmount() {
    GameStore.removeListener("change", this.getGames);
  }

  render() {

    const {gameList} = this.state;

    const GameList = gameList.map((item, i) => {
      return <Item key={i} {...item} />
    });

    return(

      <div className="content">

        <Sort filterCategory={this.props.filterCategory} filterValue={this.props.filterValue} />

        <div className="game-list">
          <ul className="game-list__ul">

            { GameList }

          </ul>
        </div>

        <Add />

      </div>
    )
  }
}

export default List;
