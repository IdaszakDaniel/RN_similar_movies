import { GraphRequestManager, GraphRequest } from 'react-native-fbsdk'

export const saveAccessToken = token => ({
  type: 'SAVE_TOKEN',
  token
})

export const moviesFetched = movies => ({
  type: 'FETCH_MOVIES_SUCCESS',
  movies
})

export const fetchingError = () => ({
  type: 'FETCH_MOVIES_FAILURE'
})

export const fetchOnboardingMovies = () => (dispatch, getState) => {
  const { token } = getState()

  const responseInfoCallback = (error, res) => {
    if (error) {
      console.log(`Error fetching data: ${error.toString()}`)
      dispatch(fetchingError)
    } else {
      console.log('Success fetching data: ', res)
      dispatch(moviesFetched(res.data))
    }
  }

  const movieRequest = new GraphRequest(
    '/me/movies',
    {
      accessToken: token
    },
    responseInfoCallback
  )

  new GraphRequestManager().addRequest(movieRequest).start()
}

export const setOnboardingMovies = movies => ({
  type: 'SET_ONBOARDING_MOVIES',
  movies
})
