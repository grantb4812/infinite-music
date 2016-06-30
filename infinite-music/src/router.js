import Router from 'ampersand-router'
import React from 'react'
import Layout from './layout'
import HomePage from './pages/home'
import Browse from './pages/browse'

export default Router.extend({
  
  renderPage (page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }

    React.render(page, document.body)
  },

  routes: {
    '': 'home',
    'browse': 'browse'
  },
  home () {
    this.renderPage(<HomePage/>)
  },
  browse () {
    this.renderPage(<Browse/>)
  }
})