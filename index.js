import Home from './Home.view'
import More from './More.view'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'

render(
  <Router>
    <div style={{
      flexDirection: 'row',
    }}>
      <Route path='/' component={Home} />
      <Route path='/more' component={More} />
    </div>
  </Router>,
  document.getElementById('root')
)
