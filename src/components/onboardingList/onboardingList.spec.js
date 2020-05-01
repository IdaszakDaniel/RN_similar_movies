import React from 'react'
import { render, waitForElement } from 'react-native-testing-library'
import OnboardingList from './onboardingList'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import reducer from '../../reducers/index'
import { toContainElement, toBeDisabled, toBeEnabled } from '@testing-library/jest-native'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

expect.extend({ toContainElement, toBeDisabled, toBeEnabled })

const props = {
  selectedMovies: () => {},
  submit: () => {}
}

function renderWithRedux(
  ui, 
  initialState,
  store = createStore(reducer, initialState, applyMiddleware(ReduxThunk))
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

describe('OnboardingList', () => {
  describe('Flatlist', () => {
    const movies = [
      { data:{ poster_path: 'poster1.png', id: 1 }, title: 'Pulp Fiction', name: 'Pulp Fiction' },
      { data:{ poster_path: 'poster2.png', id: 2 }, title: 'Die Hard', name: 'Die Hard' }
    ]
    const moviesList = [
      { poster_path: 'poster1.png', id: 1, name: 'Pulp Fiction', original_title: 'Pulp Fiction' },
      { poster_path: 'poster2.png', id: 2, name: 'Die Hard', original_title: 'Die Hard' }
    ]
    var mock = new MockAdapter(axios)
    const data = { results: moviesList }
    mock.onGet('moviedb/Pulp%20Fiction&api_key=1234').reply(200, data)

    it('renders list items', async () => {
      const { queryByTestId, getByText } = renderWithRedux(<OnboardingList {...props} />, { movies, moviesList: [] })

      const FlatList = queryByTestId('flatlist')
      let ListItem
      await waitForElement(() => ListItem = getByText('Pulp Fiction'))
      expect(FlatList).toContainElement(ListItem)
    })

    it('has button disabled', () => {
      const { queryByTestId } = renderWithRedux(<OnboardingList {...props} />, { movies, moviesList: [] })
      expect(queryByTestId('sendButton')).toBeDisabled()
    })
  })
})
