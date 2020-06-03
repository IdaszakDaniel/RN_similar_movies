import { GraphRequestManager, GraphRequest } from 'react-native-fbsdk'
import axios from 'axios'
import { tastedive, themoviedb } from '../utils/links'

export const saveAccessToken = token => ({
  type: 'SAVE_TOKEN',
  token
})

export const moviesFetched = movies => ({
  type: 'FETCH_MOVIES_SUCCESS',
  movies
})

export const fetchingError = () => ({
  type: 'FETCH_MOVIES_FAILURE'
})

export const fetchOnboardingMovies = () => (dispatch, getState) => {
  const { token } = getState()

  const responseInfoCallback = (error, res) => {
    if (error) {
      console.log(`Error fetching data: ${error.toString()}`)
      dispatch(fetchingError)
    } else {
      console.log('Success fetching data: ', res)
      dispatch(moviesFetched(res.data))
    }
  }

  const movieRequest = new GraphRequest(
    '/me/movies',
    {
      accessToken: token
    },
    responseInfoCallback
  )

  new GraphRequestManager().addRequest(movieRequest).start()
}

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

export const setOnboardingMovies = movies => ({
  type: 'SET_ONBOARDING_MOVIES',
  movies
})

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

export const setMovieToWatch = movie => ({
  type: 'MOVIE_TO_WATCH_ADDED',
  movie
})
