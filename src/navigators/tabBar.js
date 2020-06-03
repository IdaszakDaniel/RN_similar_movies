/* eslint-disable react/display-name */
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screens/homeScreen/homeScreen'
import ProfileScreen from '../screens/profileScreen/profileScreen'

const TabBar = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = 'ios-videocam'
        } else if (routeName === 'Profile') {
          iconName = 'ios-person'
        }

        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        )
      }
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      activeBackgroundColor: '#FAFAFA',
      inactiveBackgroundColor: '#FAFAFA'
    }
  }
)

export default TabBar
