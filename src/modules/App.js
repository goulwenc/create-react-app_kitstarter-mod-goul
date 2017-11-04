import React, { Component } from 'react'
import Header from './Header.js'
import HeaderSub from './HeaderSub.js'
import Menu from './Menu.js'
import MenuSub from './MenuSub.js'
import ContentMap from './ContentMap.js'
import ContentPhoto from './ContentPhoto.js'
import ContentWiki from './ContentWiki.js'
import Footer from './Footer.js'
import mockData from '../data/mockup.json'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      places: []
    };
    // console.log(mockData);
    this.data = mockData;
  }



  render() {
    return (
      <div className="App">
        <Header />
        <div className="col-wrapper">
          <div className="col col-1">
            <Menu />
          </div>
          <div className="col col-2">
            <HeaderSub />
            <MenuSub />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
