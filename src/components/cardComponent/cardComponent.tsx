import React from 'react'
import { View, ImageBackground } from 'react-native'
import styles from './styles'
import { tmdbImage } from '../../utils/images'

export interface Props {
  data: {
    poster_path: string
  }
}

const CardComponent: React.FC<Props> = ({ data }) => {
  const uri = tmdbImage(data.poster_path)
  return (
    <View>
      <ImageBackground
        source={{ uri }}
        style={styles.container}
        imageStyle={styles.image}
        testID={'image'}
      />
    </View>
  )
}

export default CardComponent
