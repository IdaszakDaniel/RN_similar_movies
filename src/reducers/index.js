import { combineReducers } from 'redux'
import { auth } from './auth'
import { movies } from './movies'
import { moviesList } from './moviesList'
import { onboardingMovies } from './onboardingMovies'
import similarMovies from './similarMovies'
import similarMoviesList from './similarMoviesList'
import moviesToWatch from './moviesToWatch'

export default combineReducers({
  auth,
  movies,
  moviesList,
  onboardingMovies,
  similarMovies,
  similarMoviesList,
  moviesToWatch
})
