import React from 'react'
import Header from './Header'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
