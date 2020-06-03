import React from 'react'
import { connect } from 'react-redux'
import MoviesListDetailed from './moviesListDetailed/moviesListDetailed'

const MyMovies = ({ moviesList }) => <MoviesListDetailed movies={moviesList} />

const mapStateToProps = ({ moviesList }) => ({
  moviesList
})

export default connect(mapStateToProps)(MyMovies)
