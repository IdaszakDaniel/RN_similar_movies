import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import Login from '../../components/loginComponent/index'

const LoginScreen: React.FC = () => {
  const { container } = styles

  return (
    <View style={container}>
      <Login />
    </View>
  )
}

export default LoginScreen
