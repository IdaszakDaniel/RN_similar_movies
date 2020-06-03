const initialState = []

const moviesToWatch = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_TO_WATCH_ADDED': {
      return [...state, action.movie]
    }
    default:
      return state
  }
}

export default moviesToWatch
