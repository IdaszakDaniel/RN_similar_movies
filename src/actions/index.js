import Config from 'react-native-config'

import {
  saveAccessToken,
  moviesFetched,
  fetchingError,
  fetchOnboardingMovies as fetchMovies,
  setOnboardingMovies
} from './onboarding'

import {
  similarMovies,
  similarMoviesError,
  similarMoviesList,
  similarMoviesListError,
  getSimilarMovies
} from './similarMovies'

import { movieData, movieDataError, getMovieData } from './movieData'

import { mockedFetchOnboardingMovies } from '../../e2e/mocks/mockedActions'

import { setMovieToWatch } from './movieToWatch'

const env = Config.ENVIRONMENT || null

const fetchOnboardingMovies =
  env === 'e2e' ? mockedFetchOnboardingMovies : fetchMovies

export {
  saveAccessToken,
  moviesFetched,
  fetchingError,
  fetchOnboardingMovies,
  setOnboardingMovies,
  similarMovies,
  similarMoviesError,
  similarMoviesList,
  similarMoviesListError,
  getSimilarMovies,
  movieData,
  movieDataError,
  getMovieData,
  setMovieToWatch
}
