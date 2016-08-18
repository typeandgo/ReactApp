import dispatcher from "../dispatcher";

export function createGame(title, kind) {
  dispatcher.dispatch({
    type: "CREATE_GAME",
    title,
    kind
  })
}

export function deleteGame(id) {
  dispatcher.dispatch({
    type: "DELETE_GAME",
    id
  })
}

export function voteGame(id, rating) {
  dispatcher.dispatch({
    type: "VOTE_GAME",
    id,
    rating
  })
}

export function filterGame(category, value) {
  dispatcher.dispatch({
    type: "FILTER_GAME",
    category,
    value
  })
}

export function calcSortDirection(direction) {
  dispatcher.dispatch({
    type: "SORT_GAME",
    direction
  })
}
