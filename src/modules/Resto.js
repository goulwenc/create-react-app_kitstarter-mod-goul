import React from 'react'

export default React.createClass({
  componentDidMount() {
    console.log("Resto did mount");
  },

  render() {
    return (
    <div>
      <h2>{this.props.params.restoName}</h2>
    </div>
    )
  }
})
