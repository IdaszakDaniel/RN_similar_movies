import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CenterView from '../../../storybook/stories/CenterView'
import { MoviesListDetailed } from './moviesListDetailed'

const movies = [
  { data: { poster_path: 'poster1.png', id: 1 }, title: 'testTitle1' },
  { data: { poster_path: 'poster2.png', id: 2 }, title: 'testTitle2' }
]

const props = {
  movies,
  navigation: () => {}
}

storiesOf('Movies List Detailed', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with two empty posters', () => <MoviesListDetailed {...props} />)
