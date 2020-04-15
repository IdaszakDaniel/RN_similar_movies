import React from 'react'
import { RkChoice } from 'react-native-ui-kitten'
import {
  Text,
  FlatList,
  View
} from 'react-native'
import styles from './moviesListComponent.styles'

const MoviesList = ({ moviesList, selectItem }) => {
  const keyExtractor = item => item.data.id.toString()

  const { itemContainer, checkBox, itemTitle, listWrapper } = styles

  const renderItem = ({ item }) => (
    <View style={itemContainer}>
      <View style={itemTitle}>
        <Text>{item.title}</Text>
      </View>
      <RkChoice
        rkType="clear"
        selected={false}
        onChange={val => selectItem(val, item)}
        style={checkBox}
      />
    </View>
  )

  return (
    <View style={listWrapper}>
      <FlatList
        data={moviesList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ marginBottom: 200 }}
      />
    </View>
  )
}

export default MoviesList
