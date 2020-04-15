import React, { useState } from 'react'
import MaterialTabs from 'react-native-material-tabs'
import { View } from 'react-native'
import MyMovies from './myMovies'
import MoviesToWatch from './moviesToWatch'

const TabSetComponent = () => {
  const [selectedTab, setSelectedTab] = useState()

  const renderTab = () => (selectedTab === 1 ? <MoviesToWatch /> : <MyMovies />)

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#FAFAFA', paddingTop: 40 }}>
        <MaterialTabs
          items={['My Movies', 'Movies to Watch']}
          selectedIndex={selectedTab}
          onChange={setSelectedTab}
          barColor="#FAFAFA"
          indicatorColor="#000000"
          activeTextColor="#000000"
          inactiveTextColor="#BDBDBD"
          uppercase={false}
        />
      </View>
      {renderTab()}
    </View>
  )
}

export default TabSetComponent
