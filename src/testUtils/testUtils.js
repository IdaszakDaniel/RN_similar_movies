import React from 'react'
import { render } from 'react-native-testing-library'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from '../reducers/index'

const renderWithRedux = (
  ui, 
  initialState,
  store = createStore(reducer, initialState, applyMiddleware(ReduxThunk))
) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
})

export default renderWithRedux
