import React from 'react'

export default React.createClass({
  componentDidMount() {
    console.log("Resto did mount");
  },

  render() {
    return (
    <div>
      <h2>{this.props.name}</h2>
    </div>
    )
  }
})
