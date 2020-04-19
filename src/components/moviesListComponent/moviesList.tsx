import React from 'react'
import { RkChoice } from 'react-native-ui-kitten'
import { Text, FlatList, View } from 'react-native'
import styles from './moviesListComponent.styles'
import { curry } from 'lodash'

type itemType = {
  item: singleItemType
}

type singleItemType = {
  title: string
  data: {
    id: number
  }
}

type keyType = {
  data: {
    id: number
  }
  title: string
}

export interface Props {
  moviesList: ReadonlyArray<keyType>
  selectItem: Function
}

const MoviesList: React.FC<Props> = ({ moviesList, selectItem }) => {
  const keyExtractor = (item: keyType): string => item.data.id.toString()

  const setOnChange = curry((item: singleItemType, val: Boolean): void =>
    selectItem(item, val),
  )

  const { itemContainer, checkBox, itemTitle, listWrapper } = styles

  const renderItem = ({ item }: itemType): React.ReactElement => (
    <View style={itemContainer}>
      <View style={itemTitle}>
        <Text>{item.title}</Text>
      </View>
      <RkChoice
        rkType="clear"
        selected={false}
        onChange={setOnChange(item)}
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
