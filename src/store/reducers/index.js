import { combineReducers } from 'redux'
import appReducer from './appReducer'
import pageDataReducer from './pageDataReducer'

export default combineReducers({
  app: appReducer,
  pages: pageDataReducer,
})
