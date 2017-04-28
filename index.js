import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'

const Home = () => (
  <div>Home</div>
)

render(
  <Router>
    <Route path='/' component={Home} />
  </Router>,
  document.getElementById('root')
)
