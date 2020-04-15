import React from 'react'
import { Provider } from 'react-redux'
import SwitchNavigator from './navigators/switchNavigator'
import { store } from './config/store'

const App = () => (
  <Provider store={store}>
    <SwitchNavigator />
  </Provider>
)

export default App
