import axios from 'axios'
import { tastedive, themoviedb } from '../utils/links'

export const similarMovies = movies => ({
  type: 'SIMILAR_MOVIES_SUCCESS',
  movies
})

export const similarMoviesError = () => ({
  type: 'SIMILAR_MOVIES_FAILURE'
})

export const similarMoviesList = movie => ({
  type: 'SIMILAR_MOVIES_LIST_SUCCESS',
  movie
})

export const similarMoviesListError = () => ({
  type: 'SIMILAR_MOVIES_LIST_FAILURE'
})

const getSimilarMovieData = movieName => dispatch => {
  const query = movieName.split(' ').join('%20')
  const URL = themoviedb(query)
  axios
    .get(URL)
    .then(data => {
      const movie = data.data.results[0]
      dispatch(similarMoviesList(movie))
    })
    .catch(() => dispatch(similarMoviesListError()))
}

const fetchSimilarMovies = () => (dispatch, getState) => {
  const state = getState()
  const result = state.onboardingMovies
    .map(el => el.title)
    .map(el => el.split('&').join('%26'))
    // eslint-disable-next-line prettier/prettier
    .map(el => el.split('\'').join('%27'))
    .map(el => el.split(' ').join('+'))
    .join('%2C+')
  const URL = tastedive('movies', result)

  return axios
    .get(URL)
    .then(data => {
      dispatch(similarMovies(data))

      return data.data.Similar.Results
    })
    .catch(err => console.log(err))
}

export const getSimilarMovies = () => dispatch => {
  dispatch(fetchSimilarMovies()).then(data => {
    data.forEach(movie => dispatch(getSimilarMovieData(movie.Name)))
  })
}
