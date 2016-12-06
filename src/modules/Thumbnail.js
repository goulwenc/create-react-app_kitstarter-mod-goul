import React from 'react'

export default React.createClass({
  componentDidMount() {
    console.log("Thumbnail did mount");
  },

  render() {
    return (
      <div>
        <p>Thumbnail</p>
      </div>
    )
  }
})
