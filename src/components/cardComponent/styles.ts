import { StyleSheet, ViewStyle, ImageStyle } from 'react-native'

interface Style {
  container: ViewStyle
  image: ImageStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    borderRadius: 10,
  },
})

export default styles
