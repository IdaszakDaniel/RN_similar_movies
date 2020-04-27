import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import TabSetComponent from '../../components/tabSetComponent'

const ProfileScreen: React.FC = () => {
  const { container } = styles
  return (
    <View style={container}>
      <TabSetComponent />
    </View>
  )
}

export default ProfileScreen
