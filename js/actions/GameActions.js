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

export function filterByType(byKind) {
  dispatcher.dispatch({
    type: "FILTER_BY_TYPE",
    byKind
  })
}

export function filterByRating(byRating) {
  dispatcher.dispatch({
    type: "FILTER_BY_RATING",
    byRating
  })
}

export function calcSortDirection(direction) {
  dispatcher.dispatch({
    type: "SORT_GAME",
    direction
  })
}
