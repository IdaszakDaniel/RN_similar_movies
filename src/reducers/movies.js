/* eslint-disable no-undef */
export const movies = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_MOVIES_SUCCESS':
    return [
      ...state,
      ...action.movies
    ]
  case 'FETCH_MOVIES_FAILURE':
    return [
      ...state,
      error = 'fetching failed'
    ]
  default:
    return state
  }
}
