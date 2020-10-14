import { movies } from '../../src/testUtils/onboardingListData'
import { moviesFetched } from '../../src/actions/index'

export const mockedFetchOnboardingMovies = () => (dispatch, getState) => {
  dispatch(moviesFetched(movies))
}
