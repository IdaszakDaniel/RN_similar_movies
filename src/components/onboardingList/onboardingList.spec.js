import React from 'react'
import { fireEvent, waitForElement } from 'react-native-testing-library'
import OnboardingList from './onboardingList'
import {
  toContainElement,
  toBeDisabled,
  toBeEnabled,
  toHaveStyle
} from '@testing-library/jest-native'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import renderWithRedux from '../../testUtils/testUtils'
import {
  movies,
  singleMovie,
  responses
} from '../../testUtils/onboardingListData'

expect.extend({ toContainElement, toBeDisabled, toBeEnabled, toHaveStyle })

const props = {
  selectedMovies: () => {},
  submit: () => {}
}

const mock = new MockAdapter(axios)
mock.onGet('moviedb/Pulp%20Fiction&api_key=1234').reply(200, responses[0])
mock.onGet('moviedb/Die%20Hard&api_key=1234').reply(200, responses[1])
mock.onGet('moviedb/Harry%20Potter&api_key=1234').reply(200, responses[2])

describe('OnboardingList', () => {
  describe('Flatlist', () => {
    it('renders list items', async () => {
      const { queryByTestId, getByText } = renderWithRedux(
        <OnboardingList {...props} />,
        { movies: singleMovie, moviesList: [] }
      )

      const FlatList = queryByTestId('flatlist')
      let ListItem
      await waitForElement(() => (ListItem = getByText('Pulp Fiction')))
      expect(FlatList).toContainElement(ListItem)
    })

    it('has button disabled', () => {
      const { queryByTestId } = renderWithRedux(<OnboardingList {...props} />, {
        movies: singleMovie,
        moviesList: []
      })
      expect(queryByTestId('sendButton')).toBeDisabled()
    })

    it('has element picked', async () => {
      const { getByTestId, getByText } = renderWithRedux(
        <OnboardingList {...props} />,
        { movies: singleMovie, moviesList: [] }
      )

      let selectButton
      let label
      await waitForElement(() => (selectButton = getByTestId('checkBox')))
      fireEvent(selectButton, 'onChange', true)
      await waitForElement(() => (label = getByText('1 Picked')))
      expect(label).toBeDefined()
    })

    it('has button enabled after three selections', async () => {
      const { queryByTestId, getAllByTestId, getByText } = renderWithRedux(
        <OnboardingList {...props} />,
        {
          movies,
          moviesList: []
        }
      )
      const [
        element1,
        element2,
        element3,
        checkboxes
      ] = await waitForElement(() => [
        getByText('Pulp Fiction'),
        getByText('Die Hard'),
        getByText('Harry Potter'),
        getAllByTestId('checkBox')
      ])

      checkboxes.map(element => fireEvent(element, 'onChange', true))
      expect(queryByTestId('sendButton')).toBeEnabled()
    })
  })
})
