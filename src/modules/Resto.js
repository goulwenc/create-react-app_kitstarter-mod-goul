import React from 'react'

export default React.createClass({

  componentDidMount() {
    console.log("Resto did mount");
    console.log('this.props : ', this.props);
  },

  render() {
    return (
    <div className="page page-resto">
      <h2>{this.props.params.restoName}</h2>
    </div>
    )
  }
})
