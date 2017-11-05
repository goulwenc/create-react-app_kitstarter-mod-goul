import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import Menu from './modules/Menu'
import Content from './modules/Content'
import ContentMap from './modules/ContentMap'
import ContentPhoto from './modules/ContentPhoto'
import ContentWiki from './modules/ContentWiki'
import './index.css'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/place" component={Content}>
        <Route path="/place/:placeId" component={Content} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
