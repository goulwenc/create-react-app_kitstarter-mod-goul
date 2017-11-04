import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import Menu from './modules/Menu'
import ContentWiki from './modules/ContentWiki'
import './index.css'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/:placeId" component={Menu}/>
  </Router>
), document.getElementById('root'));
