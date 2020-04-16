/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import {
  Text,
  FlatList,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { withNavigation, NavigationScreenProp } from 'react-navigation'
import { shape, string, arrayOf } from 'prop-types'
import styles from './styles'
import { tmdbImage } from '../../utils/images'

type itemType = {
  item: {
    data: {
      poster_path: string
    }
    title: string
  }
}

type keyType = {
  data: {
    poster_path: string
    id: number
  }
  title: string
}

export interface Props {
  movies: ReadonlyArray<keyType>
  navigation: NavigationScreenProp
}

const MoviesListDetailed: React.FC<Props> = ({
  movies,
  navigation: { navigate },
}): JSX.Element => {
  const keyExtractor = (item: keyType): string => item.data.id.toString()

  const renderItem = ({ item }: itemType): React.ReactElement => {
    const uri = tmdbImage(item.data.poster_path)
    const {
      itemContainer,
      imageBackground,
      imageStyle,
      title,
      shadowView,
    } = styles

    return (
      <TouchableOpacity onPress={(): Function => navigate('Details')}>
        <View style={itemContainer}>
          <ImageBackground
            source={{ uri }}
            style={imageBackground}
            imageStyle={imageStyle}>
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

MoviesListDetailed.propTypes = {
  movies: arrayOf(
    shape({
      item: shape({
        data: shape({
          poster_path: string,
        }),
        title: string,
      }),
    }),
  ).isRequired,
  navigation: NavigationScreenProp,
}

export default withNavigation(MoviesListDetailed)
