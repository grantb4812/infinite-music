import React from 'react'
import xhr from 'xhr'

export default React.createClass({
  render () {
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('search-button').addEventListener('click', function() {
          var input = document.getElementById('search').value
          xhr({
          uri: 'https://api.spotify.com/v1/search?q=' + input + '&type=artist',
          headers: {
            'content-type': 'application/jsonp'
          }
        }, function(err, resp, body) {
          
          console.log(body)
        })
      })
    })

    return (
        <div>Browse</div>

    )
  }
})