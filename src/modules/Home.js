import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Link to="/place">GO TO COLLECTION</Link>
      </div>
    );
  }
}

export default Home;
