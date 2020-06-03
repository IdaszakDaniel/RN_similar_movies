import React from 'react'
import { Text, FlatList, View } from 'react-native'
import styles from './moviesListComponent.styles'
import { curry } from 'lodash'
import CheckBoxComponent from '../checkboxComponent'

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

  const setOnChange = curry((item: singleItemType, val: boolean): void =>
    selectItem(item, val)
  )

  const { itemContainer, itemTitle, listWrapper } = styles

  const renderItem = ({ item }: itemType): React.ReactElement => (
    <View style={itemContainer}>
      <View style={itemTitle}>
        <Text>{item.title}</Text>
      </View>
      <CheckBoxComponent onChange={setOnChange(item)} />
    </View>
  )

  return (
    <View style={listWrapper}>
      <FlatList
        testID="flatlist"
        data={moviesList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default MoviesList
