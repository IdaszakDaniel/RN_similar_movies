import React, { useReducer } from 'react'
import {
  View,
  Button,
  Text
} from 'react-native'
import styles from './styles'
import ListComponent from '../listComponent'

const OnboardingList = ({ selectedMovies, submit }) => {
  const initialState = { count: 0 }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'inc':
        return { count: state.count + 1 }
      case 'dec':
        return { count: state.count - 1 }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const renderButton = () => (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.button}
          color="white"
          title="Next"
          onPress={submit}
          disabled={state.count < 3}
        />
      </View>
    </View>
  )

  const changeCounter = val => (val ? dispatch({ type: 'inc' }) : dispatch({ type: 'dec' }))

  const { mainContainer, listContainer } = styles

  return (
    <View style={mainContainer}>
      <View style={listContainer}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>Pick at least 3 movies:</Text>
          <Text style={styles.headerCounter}>
            {state.count}
            {' '}
            Picked
          </Text>
        </View>
        <ListComponent
          selectedMovies={selectedMovies}
          changeCounter={changeCounter}
        />
      </View>
      {renderButton()}
    </View>
  )
}

export default OnboardingList
