import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import CounterApp from './components/CounterApp/CounterApp'
import Nav from './components/layout/Nav'
import Home from './components/layout/Home'
import 'materialize-css'


render(
  <Router history={hashHistory}>
    <Route path="/" component={Nav}>
      <IndexRoute component={Home} />
      <Route path="counter" component={CounterApp}></Route>
    </Route>
  </Router>

  , document.getElementById('app'))