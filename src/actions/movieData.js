import axios from 'axios'
import { themoviedb } from '../utils/links'

export const movieData = movie => ({
  type: 'MOVIE_DATA_SUCCESS',
  movie
})

export const movieDataError = () => ({
  type: 'MOVIE_DATA_FAILURE'
})

export const getMovieData = movieName => dispatch => {
  const query = movieName.split(' ').join('%20')
  const URL = themoviedb(query)
  axios
    .get(URL)
    .then(data => {
      const movie = data.data.results[0]
      dispatch(movieData(movie))
    })
    .catch(() => dispatch(movieDataError()))
}
