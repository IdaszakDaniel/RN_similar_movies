import React from 'react'
import { connect } from 'react-redux'
import MoviesListDetailed from './moviesListDetailed/moviesListDetailed'

const MoviesToWatch = ({ moviesToWatch }) => <MoviesListDetailed movies={moviesToWatch} />

const mapStateToProps = ({ moviesToWatch }) => ({
  moviesToWatch
})

export default connect(mapStateToProps)(MoviesToWatch)
