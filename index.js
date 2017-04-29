import Home from './Home.view'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'

render(
  <Router>
    <Route path='/' component={Home} />
  </Router>,
  document.getElementById('root')
)
