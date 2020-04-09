import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <h1>Ugoki</h1>
    <p>Welcome to your new Gatsby site.</p>

  </Layout>
)

export default IndexPage
