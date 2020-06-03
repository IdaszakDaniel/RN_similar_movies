const initialState = []

export const moviesList = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_DATA_SUCCESS': {
      const title = action.movie.original_title
      const obj = { title, data: action.movie }

      return [...state, obj]
    }
    case 'MOVIE_DATA_FAILURE':
      return [...state]
    default:
      return state
  }
}
