import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reducers from '../reducers'

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
)
