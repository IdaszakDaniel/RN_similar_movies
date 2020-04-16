const initialState = []

export const onboardingMovies = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_ONBOARDING_MOVIES':
    return action.movies
  default:
    return state
  }
}
