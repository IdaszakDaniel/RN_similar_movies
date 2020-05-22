import remoteConfig from '@react-native-firebase/remote-config'

export const fetchConfig = async () => {
  await remoteConfig().setConfigSettings({
    isDeveloperModeEnabled: __DEV__,
    minimumFetchInterval: 0
  })
  await remoteConfig().setDefaults({
    experiment: true
  })
  await remoteConfig().fetchAndActivate()
}

export const getRemoteValue = key => remoteConfig().getValue(key).value
