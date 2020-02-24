import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import Loader from './components/loader'
import HomeBinding from './binding/home'
import UsersBinding from './binding/users'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeBinding />
            </Route>
            <Route path="/users">
              <UsersBinding />
            </Route>
          </Switch>
        </Router>

        <Loader />
      </Provider>
    )
  }
}

export default App
