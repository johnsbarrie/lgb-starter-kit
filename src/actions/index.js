import { APP } from '../constants'

const loadItem = itemID => ({
  type: APP.LOAD_ITEM,
  payload: itemID,
})

export { loadItem }
