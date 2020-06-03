const initialState = []

const similarMovies = (state = initialState, action) => {
  switch (action.type) {
    case 'SIMILAR_MOVIES_SUCCESS': {
      const obj = action.movies.data.Similar.Results

      return [...state, ...obj]
    }
    case 'SIMILAR_MOVIES_FAILURE':
      return [...state]
    default:
      return state
  }
}

export default similarMovies
