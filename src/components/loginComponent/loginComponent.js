import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { saveAccessToken } from '../../actions'
import LoginInterface from './loginInterface'

const Login = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken = null
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (err) {
        console.warn(err)
      }
      navigate(userToken ? 'Onboarding' : 'Auth')
    }
    bootstrapAsync()
  })

  const storeData = token => {
    try {
      AsyncStorage.setItem('userToken', token)
    } catch (error) {
      console.log(error)
    }
  }

  const getAccesToken = () => AccessToken.getCurrentAccessToken().then(data => {
    const token = data.accessToken.toString()
    storeData(token)
    dispatch(saveAccessToken(token))
    navigate('Onboarding')
  })

  const loginSuccess = result => {
    if (result.isCancelled) {
      console.log('Login cancelled')
    } else {
      console.log(
        `Login success with permissions: ${result.grantedPermissions.toString()}`
      )
      getAccesToken()
    }
  }

  const login = () => LoginManager.logInWithPermissions(['public_profile', 'user_likes']).then(
    loginSuccess,
    error => console.log(`Login fail with error: ${error}`)
  )

  return <LoginInterface onPress={login} />
}
export default withNavigation(Login)
