import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native'
import { responsiveWidth } from '../../utils/dimensions'

interface Style {
  listContainer: ViewStyle
  itemContainer: ViewStyle
  image: ImageStyle
  imageBackground: ViewStyle
  imageStyle: ImageStyle
  title: TextStyle
  shadowView: ViewStyle
}

const styles = StyleSheet.create<Style>({
  listContainer: {
    overflow: 'hidden'
  },
  itemContainer: {
    width: responsiveWidth(95),
    height: 250,
    marginHorizontal: responsiveWidth(2),
    marginVertical: 5,
    overflow: 'hidden'
  },
  image: {
    width: 100,
    height: 100
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  imageStyle: {
    borderRadius: 10,
    resizeMode: 'cover'
  },
  title: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24
  },
  shadowView: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10
  }
})

export default styles
