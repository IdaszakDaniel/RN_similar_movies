/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import {
  Text,
  FlatList,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { withNavigation, NavigationInjectedProps } from 'react-navigation'
import styles from './moviesListDetailed.style'
import { tmdbImage } from '../../utils/images'

type keyType = {
  data: {
    poster_path: string
    id: number
  }
  title: string
}

type itemType = {
  item: keyType
}

export interface Props extends NavigationInjectedProps {
  movies: ReadonlyArray<keyType>
}

export const MoviesListDetailed: React.FC<Props> = ({
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
      <TouchableOpacity
        onPress={(): Boolean => navigate('Details')}
        testID="item">
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
      testID="flatlist"
      data={movies}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.listContainer}
    />
  )
}

export default withNavigation(MoviesListDetailed)
