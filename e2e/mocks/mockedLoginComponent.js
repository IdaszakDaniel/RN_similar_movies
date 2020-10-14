import React, { useEffect } from 'react'
import { withNavigation } from 'react-navigation'

const Login = ({ navigation: { navigate } }) => {
  useEffect(() => {
    navigate('Onboarding')
  })

  return <></>
}

export default withNavigation(Login)
