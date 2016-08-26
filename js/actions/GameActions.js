import dispatcher from "../dispatcher";

export const GAME_ACTIONS = {
  CREATE_GAME: "CREATE_GAME",
  DELETE_GAME: "DELETE_GAME",
  VOTE_GAME: "VOTE_GAME",
  FILTER_GAME: "FILTER_GAME",
  SORT_GAME: "SORT_GAME"
}

export function createGame(title, kind) {
  dispatcher.dispatch({
    type: GAME_ACTIONS.CREATE_GAME,
    title,
    kind
  })
}

export function deleteGame(id) {
  dispatcher.dispatch({
    type: GAME_ACTIONS.DELETE_GAME,
    id
  })
}

export function voteGame(id, rating) {
  dispatcher.dispatch({
    type: GAME_ACTIONS.VOTE_GAME,
    id,
    rating
  })
}

export function filterGame(category, value) {
  dispatcher.dispatch({
    type: GAME_ACTIONS.FILTER_GAME,
    category,
    value
  })
}

export function sortGame(direction) {
  dispatcher.dispatch({
    type: GAME_ACTIONS.SORT_GAME,
    direction
  })
}
