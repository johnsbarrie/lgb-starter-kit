import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
sagaMiddleware.run(rootSaga)

const action = (type, payload) => store.dispatch({ type, payload })

export { action, store }
