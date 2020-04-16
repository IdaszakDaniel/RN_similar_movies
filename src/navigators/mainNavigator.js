import { createStackNavigator } from 'react-navigation'
import TabBar from './tabBar'
import DetailsScreen from '../screens/detailsScreen/detailsScreen'

const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: TabBar
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default MainNavigator
