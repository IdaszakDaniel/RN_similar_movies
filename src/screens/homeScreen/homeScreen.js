import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import BouncingPreloader from 'react-native-bouncing-preloader'
import styles from './styles'
import { getSimilarMovies, setMovieToWatch } from '../../actions'
import SwiperComponent from '../../components/SwiperComponent/swiperComponent'
import oscar from '../../assets/oscar.png'
import cam from '../../assets/cam.png'
import masks from '../../assets/masks.png'
import column from '../../assets/column.png'
import hurdy from '../../assets/hurdy.png'
import quill from '../../assets/quill.png'

const HomeScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => dispatch(getSimilarMovies()), [])

  const { similarMoviesList, similarMovies } = useSelector(state => ({
    similarMoviesList: state.similarMoviesList,
    similarMovies: state.similarMovies
  }))

  const isNotEmpty = similarMovies.length > 0
  const isFetched = similarMoviesList.length >= similarMovies.length - 1

  const renderSpinner = () => (
    <View style={styles.spinnerContainer}>
      <BouncingPreloader icons={[oscar, cam, masks, column, hurdy, quill]} />
    </View>
  )

  const renderSwiper = () =>
    isNotEmpty && isFetched ? (
      <SwiperComponent
        movies={similarMoviesList}
        setMovieToWatch={movie => dispatch(setMovieToWatch(movie))}
      />
    ) : (
      renderSpinner()
    )

  const { container } = styles

  return <View style={container}>{renderSwiper()}</View>
}

export default HomeScreen
