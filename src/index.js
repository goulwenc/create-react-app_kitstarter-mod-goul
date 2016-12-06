import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import Resto from './modules/Resto'
import Restos from './modules/Restos'
import About from './modules/About'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/restos" component={Restos}>
        <Route path="/restos/:restoName" component={Resto} />
      </Route>
      <Route path="/about" component={About} />
    </Route>
  </Router>
), document.getElementById('root'))
