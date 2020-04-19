import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieData } from '../actions'
import MoviesList from './moviesListComponent/moviesList'

type singleItemType = {
  title: string
  data: {
    id: number
  }
}

type movieType = {
  name: string
}

type stateType = {
  movies: Array<movieType>
  moviesList: Array<movieType>
}

export interface Props {
  selectedMovies: Function
  changeCounter: Function
}

const ListComponent: React.FC<Props> = ({ selectedMovies, changeCounter }) => {
  const [moviesFetched, setmoviesFetched] = useState(false)
  const [favMovies, setfavMovies] = useState<Array<singleItemType>>([])
  const dispatch = useDispatch()

  const { movies, moviesList = [] } = useSelector((state: stateType) => ({
    movies: state.movies,
    moviesList: state.moviesList,
  }))

  useEffect(() => {
    if (movies.length > 0 && !moviesFetched) {
      movies.forEach((movie: movieType) => {
        dispatch(getMovieData(movie.name))
      })
      setmoviesFetched(true)
    }
  }, [dispatch, movies, moviesFetched, moviesList])

  const changeFavMovies = (item: singleItemType, val: Boolean): void => {
    changeCounter(val)
    let newFavMovies: singleItemType[] = [...favMovies]
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
