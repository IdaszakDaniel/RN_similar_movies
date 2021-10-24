import { movies } from '../../src/testUtils/onboardingListData'
import { moviesFetched } from '../../src/actions/index'

export const mockedFetchOnboardingMovies = () => (dispatch, getState) => {
  console.warn('e2e setuo')
  dispatch(moviesFetched(movies))
}
