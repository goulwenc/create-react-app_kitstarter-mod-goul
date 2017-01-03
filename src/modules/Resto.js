import React from 'react'

class Resto extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.state;
  }
  componentDidMount() {
    console.log("Resto did mount");
    console.log('item data : ', this.state);
  }
  render() {
    return (
      <div className="page page-resto">
        <h2>{this.state.name}</h2>
        <p>{this.state.adress}</p>
        <p><span>{this.state.zipcode}</span>{this.state.city}</p>
      </div>
    );
  }
}

export default Resto;
