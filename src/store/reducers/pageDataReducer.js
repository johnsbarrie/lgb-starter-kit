import { APP } from '../../constants'

const initState = () => {
  return {}
}

const pageDataReducer = (state = initState(), action) => {
  const payload = action.payload

  switch (action.type) {
    case APP.ITEM_LOADED:
      return {
        ...state,
        [payload.pageId]: payload.pageData,
      }
    default:
      return state
  }
}

export default pageDataReducer
