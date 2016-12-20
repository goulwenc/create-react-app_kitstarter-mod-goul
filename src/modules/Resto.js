import React from 'react'

export default React.createClass({
  componentDidMount() {
    console.log("Resto did mount");
  },

  render() {
    return (
    <div className="page page-resto">
      <h2>{this.props.name}</h2>
    </div>
    )
  }
})
