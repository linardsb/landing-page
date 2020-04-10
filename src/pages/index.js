import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wawe from '../components/Globals/Wawe';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <div className="Hero">
      <div className="HeroGroup">
        <h1> A simple way to stay focused and full of energy while you work</h1>
        <p>We can help you gain that extra quality time where it counts the most – with family and friends; to start a new hobby or take up on old pastime again; help get that promotion; make that business idea you thought of some time ago a reality. We do this using our own unique platform.</p>
        <div className="Logos">
          <img src="../img/fasting.png" width="70" alt=""/>
          <img src="../img/lemon.png" width="76" alt=""/>
          <img src="../img/running.png" width="76" alt=""/>
          <img src="../img/watch.png" width="50" alt=""/>
          <img src="../img/strategy.png" width="70" alt=""/>
          <img src="../img/worldwide.png" width="70" alt=""/>
          <img src="../img/analysys.png" width="70" alt=""/>
          <img src="../img/research.png" width="70" alt=""/>
        </div>
        <Wawe/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
