import { APP } from '../../constants'

const initState = () => {
  return {
    loading: false,
    pageData: {},
  }
}

const appReducer = (state = initState(), action) => {
  switch (action.type) {
    case APP.SHOW_LOADER:
      return { ...state, loading: true }
    case APP.HIDE_LOADER:
      return { ...state, loading: false }
    default:
      return state
  }
}

export default appReducer
