/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import PropTypes from 'prop-types'
import Header from './Globals/Header'
import './Layout.css'

const LayoutComponent = ({ children }) => (
    <>
    <Header/>
    {children}
    </>
  )

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutComponent
