import { createSwitchNavigator } from 'react-navigation'
import LoginScreen from '../screens/loginScreen/loginScreen'
import OnboardingScreen from '../screens/onboardingScreen/onboardingScreen'
import MainNavigator from './mainNavigator'

export default createSwitchNavigator(
  {
    App: MainNavigator,
    Auth: LoginScreen,
    Onboarding: OnboardingScreen
  },
  {
    initialRouteName: 'Auth'
  }
)
