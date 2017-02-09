import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import CounterApp from './components/CounterApp/CounterApp'
import TodoApp from './components/TodoApp/TodoApp'
import Nav from './components/layout/Nav'
import Home from './components/layout/Home'
import { createStore } from 'redux'
import RootReducer from './reducers/RootReducer'
import { Provider } from 'react-redux'

const store = createStore(RootReducer)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Nav}>
        <IndexRoute component={Home} />
        <Route path="counter" component={CounterApp}></Route>
        <Route path='todo' component={TodoApp}></Route>
      </Route>
    </Router>
  </Provider>

  , document.getElementById('app'))