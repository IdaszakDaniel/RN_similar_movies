import React from 'react'
import { fireEvent, waitForElement } from 'react-native-testing-library'
import OnboardingList from './onboardingList'
import { toContainElement, toBeDisabled, toBeEnabled, toHaveStyle } from '@testing-library/jest-native'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import renderWithRedux from '../../utils/testUtils'

expect.extend({ toContainElement, toBeDisabled, toBeEnabled, toHaveStyle })

const props = {
  selectedMovies: () => {},
  submit: () => {}
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

    it('has element picked', async () => {
      const { getByTestId, getByText } = renderWithRedux(<OnboardingList {...props} />, { movies, moviesList: [] })

      let selectButton
      let label
      await waitForElement(() => selectButton = getByTestId('RkChoice'))
      fireEvent(selectButton, 'onChange', true)
      await waitForElement(() => label = getByText('1 Picked'))
      expect(label).toHaveStyle({ fontSize: 12 })
    })
  })
})
