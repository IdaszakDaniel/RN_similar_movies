import React from 'react'
import {
  Text, FlatList, View, ImageBackground, TouchableOpacity
} from 'react-native'
import { withNavigation } from 'react-navigation'
import styles from './styles'
import { tmdbImage } from '../../utils/images'

const MoviesListDetailed = ({ movies, navigation: { navigate } }) => {
  const keyExtractor = item => item.data.id.toString()

  const renderItem = ({ item }) => {
    const uri = tmdbImage(item.data.poster_path)
    const { itemContainer, imageBackground, imageStyle, title, shadowView } = styles

    return (
      <TouchableOpacity onPress={() => navigate('Details')}>
        <View style={itemContainer}>
          <ImageBackground source={{ uri }} style={imageBackground} imageStyle={imageStyle}>
            <View style={shadowView}>
              <Text style={title}>{item.title}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.listContainer}
    />
  )
}

export default withNavigation(MoviesListDetailed)
