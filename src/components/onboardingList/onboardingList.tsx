/* eslint-disable indent */
import React, { useReducer } from 'react'
import { View, Button, Text } from 'react-native'
import styles from './onboardingList.styles'
import ListComponent from '../listComponent'

export interface Props {
  selectedMovies: Function
  submit(): void
}

type state = {
  count: number
}

type action = {
  type: string
}

const OnboardingList: React.FC<Props> = ({ selectedMovies, submit }) => {
  const initialState = { count: 0 }

  const reducer = (state: state, action: action): state => {
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

  const renderButton = (): React.ReactElement => (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonWrapper}>
        <Button
          testID="sendButton"
          color="white"
          title="Next"
          onPress={submit}
          disabled={state.count < 3}
        />
      </View>
    </View>
  )

  const changeCounter = (val: Boolean): void =>
    val ? dispatch({ type: 'inc' }) : dispatch({ type: 'dec' })

  const { mainContainer, listContainer } = styles

  return (
    <View style={mainContainer}>
      <View style={listContainer}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>Pick at least 3 movies:</Text>
          <Text style={styles.headerCounter}>{state.count} Picked</Text>
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
