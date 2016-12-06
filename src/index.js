import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Thumbnail from './modules/Thumbnail'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Thumbnail} />
    </Route>
  </Router>
), document.getElementById('root'))
