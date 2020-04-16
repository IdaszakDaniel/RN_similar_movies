const initialState = {
  token: ''
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
  case 'SAVE_TOKEN':
    return action.token
  default:
    return state
  }
}
