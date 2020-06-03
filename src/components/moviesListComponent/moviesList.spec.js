/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import MoviesList from './moviesList'
import { toContainElement } from '@testing-library/jest-native'

expect.extend({ toContainElement })

const movies = [
  { data: { poster_path: 'poster1.png', id: 1 }, title: 'testTitle1' },
  { data: { poster_path: 'poster2.png', id: 2 }, title: 'testTitle2' }
]

const movie = [
  { data: { poster_path: 'poster1.png', id: 1 }, title: 'testTitle1' }
]

const props = {
  moviesList: movies,
  selectItem: () => {}
}

describe('MoviesList:', () => {
  describe('Flatlist element', () => {
    it('renders correctly', () => {
      const tree = render(<MoviesList {...props} />).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('contains item with text', () => {
      const { queryByTestId, getByText } = render(<MoviesList {...props} />)

      const FlatList = queryByTestId('flatlist')
      const ListItem = getByText('testTitle1')

      expect(FlatList).toContainElement(ListItem)
    })

    it('returns proper data after click', () => {
      const onSelectMock = jest.fn()
      const props = {
        moviesList: movie,
        selectItem: onSelectMock
      }
      const { getByTestId } = render(<MoviesList {...props} />)

      fireEvent(getByTestId('checkBox'), 'onChange', true)
      expect(onSelectMock).toHaveBeenCalled()
      expect(onSelectMock).toHaveBeenCalledWith(movie[0], true)
    })
  })
})
