import React from 'react'

import LayoutComponent from '../components/LayoutComponent'
import SEO from '../components/SeoComponent' 

const NotFoundPage = () => (
  <LayoutComponent>
    <SEO title="Sorry, this page does not exist" />
    <h1>NOT FOUND</h1> 
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutComponent>
)

export default NotFoundPage
