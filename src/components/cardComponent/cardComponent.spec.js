import React from 'react'
import { render } from 'react-native-testing-library'
import CardComponent from './cardComponent'

describe('Card Component', () => {
  it('renders the image with the test URI', () => {
    const props = {
      data: {
        poster_path: 'test'
      }
    }

    const tree = render(<CardComponent {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the image with proper styles', () => {
    const props = {
      data: {
        poster_path: 'test'
      }
    }

    const rendered = render(<CardComponent {...props} />)
    const wrapperComponent = rendered.getByTestId('image')

    expect(wrapperComponent.props.style).toMatchObject({
      width: '100%',
      height: '100%'
    })
    expect(wrapperComponent.props.imageStyle).toMatchObject({
      borderRadius: 10
    })
  })
})
