// ------------------------------------
// Constants
// ------------------------------------
const USER_LOGIN = 'USER_LOGIN'

// ------------------------------------
// Actions
// ------------------------------------
const userLogin = (value = false) => ({
  type    : USER_LOGIN,
  payload : value
})

export const actions = {
  userLogin
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_LOGIN] : (state, action) => ({
    ...state,
    isUserLoggedIn: action.payload
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  isUserLoggedIn: false
}

const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default reducer
