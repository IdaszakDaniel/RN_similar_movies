import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

interface Style {
  itemContainer: ViewStyle
  itemTitle: TextStyle
  listWrapper: ViewStyle
}

const styles = StyleSheet.create<Style>({
  itemContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  itemTitle: {
    width: '70%',
    height: '100%',
    paddingLeft: 20,
  },
  listWrapper: {
    width: '100%',
    height: '100%',
  },
})

export default styles
