const initialState = []

const similarMoviesList = (state = initialState, action) => {
  switch (action.type) {
    case 'SIMILAR_MOVIES_LIST_SUCCESS': {
      const title = action.movie.original_title
      const obj = { title, data: action.movie }

      return [...state, obj]
    }
    case 'SIMILAR_MOVIES_LIST_FAILURE':
      return [...state]
    default:
      return state
  }
}

export default similarMoviesList
