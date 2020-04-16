import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  itemContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  itemTitle: {
    width: '70%',
    height: '100%',
    paddingLeft: 20
  },
  checkBox: {
    backgroundColor: 'gray',
    marginRight: 20
  },
  listWrapper: {
    width: '100%',
    height: '100%'
  }
})

export default styles
