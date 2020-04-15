import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieData } from '../actions'
import MoviesList from './moviesListComponent/moviesList'

const ListComponent = ({ selectedMovies, changeCounter }) => {
  const [moviesFetched, setmoviesFetched] = useState(false)
  const [favMovies, setfavMovies] = useState([])
  const dispatch = useDispatch()

  const { movies, moviesList = [] } = useSelector(state => ({
    movies: state.movies,
    moviesList: state.moviesList
  }))

  useEffect(() => {
    if (movies.length > 0 && !moviesFetched) {
      movies.forEach(movie => {
        dispatch(getMovieData(movie.name))
      })
      setmoviesFetched(true)
    }
  }, [dispatch, movies, moviesFetched, moviesList])

  const changeFavMovies = (val, item) => {
    changeCounter(val)
    let newFavMovies = [...favMovies]
    if (val) {
      newFavMovies.push(item)
    } else {
      newFavMovies = favMovies.filter(el => el.data.id !== item.data.id)
    }
    setfavMovies(newFavMovies)
    selectedMovies(newFavMovies)
  }

  return <MoviesList moviesList={moviesList} selectItem={changeFavMovies} />
}

export default ListComponent
