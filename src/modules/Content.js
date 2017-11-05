import React, { Component } from 'react'
import { Link } from 'react-router'
import Menu from './Menu'
import MenuSub from './MenuSub'
import Header from './Header'
import HeaderSub from './HeaderSub'

class Content extends Component {
  constructor(props) {
    super(props);
    console.log("props");
    console.log(props);
  }
  render() {
    return (
      <div className="content col-wrapper">
        <div className="col col-1">
          <Menu />
        </div>
        <div className="col col-2">
          <HeaderSub />
          <MenuSub />
          <div>
            <h2>{this.props.params.placeId}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
