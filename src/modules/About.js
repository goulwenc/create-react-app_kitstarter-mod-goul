import React from 'react'

export default React.createClass({
  componentDidMount() {
    console.log("About did mount");
  },

  render() {
    return (
    <div>
      <h2>About</h2>
    </div>
    )
  }
})
