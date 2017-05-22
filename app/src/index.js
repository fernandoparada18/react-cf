import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRouter, hashHistory } from 'react-router'

import Home from './routes/Home.js'
import Store from './routes/Store.js'

const app = document.getElementById('app')
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='store' component={Store} />
  </Router>
, app)
