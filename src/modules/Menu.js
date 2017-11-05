import React, { Component } from 'react';
import { Link } from 'react-router';
import mockData from '../data/mockup.json'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
    this.data = mockData;
    this.filterList = this.filterList.bind(this);
    console.log(this.data.places);
  }

  handleLinkClick() {

  }

  componentWillMount() { //INITIALIZATION
    const listPlaces = this.data.places.map((place) =>
      <li key={place.name.toString()}>
        <Link activeClassName="active" to={`/place/${place.name.toLowerCase().replace(" ", "-")}`} onClick={this.handleLinkClick}> {place.name} </Link>
      </li>
    )

    this.setState({
      places: listPlaces
    });
  }

  filterList() {
    // let listPlaces =[];
    // listPlaces = this.data.places.map((key, place) => listPlaces.push(place.name));

    //alphabetical sorting
    // var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
    // items.sort((a, b) => a.localeCompare(b)); // ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
    // console.log(items);

    this.setState({
      places: this.state.places.reverse()
    });
  }

  render() {
    return (
      <div className="menu">
        <button onClick={this.filterList}>Filter</button>
        <ul>
          {this.state.places}
        </ul>
      </div>
    );
  }
}

export default Menu;
