import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    height: '10%',
    width: '100%',
    alignItems: 'center'
  },
  buttonWrapper: {
    width: '60%',
    borderRadius: 50,
    height: 60,
    backgroundColor: 'blue',
    justifyContent: 'center'
  },
  button: {
    width: '100%',
    height: '100%'
  },
  headerWrapper: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  headerCounter: {
    fontSize: 12,
    fontWeight: 'bold'
  }
})
export default styles
