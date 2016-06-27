import React from 'react'

export default React.createClass({
  render () {
    return (
        <div className="container">
          <div className="top-bar"></div>
          <div className="left-bar"></div>
          <div className="app-container">
            {this.props.children}
          </div>
          <div className="right-bar"></div>
          <div className="bottom-bar"></div>  
        </div>
    )
  }
})

