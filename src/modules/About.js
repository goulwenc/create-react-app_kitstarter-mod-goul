import React from 'react'

export default React.createClass({
  componentDidMount() {
    console.log("About did mount");
  },

  render() {
    return (
    <div className="page page-about">
      <h2>About</h2>
    </div>
    )
  }
})
