jest.mock('react-navigation', () => ({ 
  withNavigation: (component) => component 
}))

jest.mock('react-native-config', () => ({
  'THE_MOVIE_DB_LINK': 'moviedb/',
  'API_KEY': '1234'
}))
