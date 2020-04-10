import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import Wawe from '../components/Globals/Wawe'
import Card from '../components/Card'
import { graphql } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <div className="Hero">
      <div className="HeroGroup">
        <h1> A simple way to stay focused and full of energy while you work</h1>
        <p>We can help you gain that extra quality time where it counts the most – with family and friends; to start a new hobby or take up on old pastime again; help get that promotion; make that business idea you thought of some time ago a reality. We do this using our own unique platform.</p>
        <div className="Logos">
          <img src={require('../images/fasting.png')} width="70" alt=""/>
          <img src={require('../images/lemon.png')} width="76" alt=""/>
          <img src={require('../images/running.png')} width="76" alt=""/>
          <img src={require('../images/watch.png')} width="50" alt=""/>
          <img src={require('../images/strategy.png')} width="70" alt=""/>
          <img src={require('../images/worldwide.png')} width="70" alt=""/>
          <img src={require('../images/analysys.png')} width="70" alt=""/>
          <img src={require('../images/research.png')} width="70" alt=""/>
        </div>
        <Wawe/>
      </div>
    </div>
    <div className="Cards"> 
      <h2>Some of the goals of this product:</h2>
      <p className="IntroText">Our mobile app will be designed as a well-being, health and human performance optimisation platform. A suggestive analytics and data modelling engine will be at the core of the product, to help and advise you on your success journey, with personalised approach to your body type, suggestive meal planning, physical performance, fitness the most natural way possible.</p>
      <div className="CardGroup">
        <Card
        title="Time saver"
        text="We'll help you to save your time"
        image={require('../images/Planes2_v2.jpg')}
         /> 
        <Card
        title="Excercise planner"
        text="We'll work together to plan your fitness"
        image={require('../images/Planes10_v2.jpg')} />
        <Card
        title="Fuel for the body"
        text="You'll be able to choose a meal planner if you wish"
        image={require('../images/Planes3_v2.jpg')} /> 
        <Card
        title="Track your progress"
        text="Refer to the chart of your improvements"
        image={require('../images/Planes4_v2.jpg')} /> 
        <Card
        title="Itermittent Fasting"
        text="Science and body type based (IF) cycles"
        image={require('../images/Planes5_v2.jpg')} /> 
        <Card
        title="Fitness video lessons"
        text="Bite sized videos to stay in top form"
        image={require('../images/Planes11_v2.jpg')} /> 
        <Card
        title="Social Network"
        text="Communicate and interact with other members"
        image={require('../images/Planes8_v2.jpg')} /> 
        <Card
        title="Research and science"
        text="Research based articles and blog posts"
        image={require('../images/Planes2_v2.jpg')} /> 
        </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
