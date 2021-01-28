import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import globalBaseReducer from '../modules/global_base'

export const makeRootReducer = (asyncReducers) => {
  const rootReducer = combineReducers({
    form: formReducer,
    globalBase: globalBaseReducer,
    ...asyncReducers
  })
  
  return rootReducer
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
