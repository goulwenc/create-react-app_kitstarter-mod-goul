import React, { Component } from 'react'
import Store from "./Store.js"
import Header from './Header.js'
import HeaderSub from './HeaderSub.js'
import Menu from './Menu.js'
import MenuSub from './MenuSub.js'
import Home from './Home.js'
import Content from './Content.js'
import ContentMap from './ContentMap.js'
import ContentPhoto from './ContentPhoto.js'
import ContentWiki from './ContentWiki.js'
import Footer from './Footer.js'
import mockData from '../data/mockup.json'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
    // console.log(mockData);
    this.data = mockData;
    // console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children || <Home/>}
        <Footer />
      </div>
    );
  }
}

export default App;
