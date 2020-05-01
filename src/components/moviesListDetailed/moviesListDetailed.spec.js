import React from 'react'
import { render, debug } from 'react-native-testing-library'
import { MoviesListDetailed } from './moviesListDetailed'

const movies = [
  { data:{ poster_path: 'poster1.png', id: 1 }, title: 'testTitle1' },
  { data:{ poster_path: 'poster2.png', id: 2 }, title: 'testTitle2' }
]

const props = {
  movies,
  navigation: () => {}
}

describe('MoviesListDetailed', () => {
  describe('1...', () => {
    it('renders properly', () => {
      const tree = render(<MoviesListDetailed {...props} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})


