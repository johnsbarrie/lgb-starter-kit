import { takeEvery, all, put } from 'redux-saga/effects'
import { APP } from '../../constants'

const getStubWithId = pageId => {
  switch (pageId) {
    case 'home':
      return {
        title: 'Welcome to your LBG CWA App',
        text: 'Home Page',
      }
    case 'users':
      return {
        title: 'User Template',
        text: 'Users Page',
      }
  }
}

const delay = ms =>
  new Promise(res => {
    setTimeout(res, ms)
  })

function* loadItem({ payload: pageId }) {
  yield put({ type: APP.SHOW_LOADER })
  yield delay(500)
  yield put({
    type: APP.ITEM_LOADED,
    payload: {
      pageId,
      pageData: getStubWithId(pageId),
    },
  })
  yield put({ type: APP.HIDE_LOADER })
}

//watcher
function* flashLoaderAsync() {
  yield takeEvery(APP.LOAD_ITEM, loadItem)
}

export default function* rootSaga() {
  yield all([flashLoaderAsync()])
}
