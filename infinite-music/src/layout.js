import React from 'react'
import localLinks from 'local-links'


export default React.createClass({
  onClick (event) {
    const path = localLinks.getLocalPathname(event)
    console.log(path)
    if (path) {
      event.preventDefault()
      app.router.history.navigate(path)
    }
  },
  render () {
    return (
        <div onClick={this.onClick} className="container">
          <div className="top-bar">
            <div className="top-bar-search">
              <input placeholder='Search' id='search'/>
              <button id="search-button">Search</button>
            </div>
            <div className="top-bar-profile">
              Profile
            </div>
          </div>
          <div className="left-bar">
            <ul>
              <lh><a href="/">Main</a></lh>
              <li><a href="/browse">Browse</a></li> 
              <li>Radio</li>
            </ul>
          </div>
          <div className="app-container">
            {this.props.children}
          </div>
          <div className="right-bar"></div>
          <div className="bottom-bar"></div>  
        </div>
    )
  }
})



