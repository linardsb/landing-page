import React from 'react'
import LayoutComponent from '../components/LayoutComponent'
import SEO from '../components/SeoComponent'
import Wawe from '../components/Globals/Wawe'
import Card from '../components/Card'
import Cell from '../components/Cell'
import Section from '../components/Section'   

import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import staticdata from '../../staticdata.json'
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 700;
  font-size:19px;
  background: linear-gradient(104deg, #182736 0%, #416991 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  text-align:center; 
`

const SectionGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 1060px) {
    text-align: center;
    grid-template-columns:repeat(1, 1fr); 
    margin: 0 auto 20px;
  }
`

const IndexPage = () => (
  <LayoutComponent>
    <SEO title="" keywords={[`hiit`, `video lessons`, `health`, `medtech`, `meditatin`, `intermittent fasting`]}/>
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
    <div className="cta">
      <button><Link to="/contact">Receive email</Link></button>
    </div>
 
    <Section 
    image={require('../images/wallpaper4.png')} 
    alt=""
    logo={require('../images/contract.png')} 
    title="Sign Up"
    text="Upon sign up, we’ll ask a few simple questions so we can better 
    understand your current level of well-being. We‘ll then mentor you on how to achieve a successful 
    Intermittent Fasting programme (starting the fasting, breaking the fast, nutrient absorption, 
    duration of the fast, body type fast). 
    Importantly, this doesn’t mean reducing your calorie intake - 
    you can still enjoy your favourite foods and we’ll offer some tasty, 
    nutritious suggestions and simple recipes as well." />
    
    <SectionCaption>Features continued</SectionCaption><br></br><br></br>
    <SectionGroup>
    {staticdata.cells.map(cell => (
      <Cell 
      title={cell.title}
      image={cell.image} />
      ))}
    </SectionGroup>
  </LayoutComponent>
)

export default IndexPage

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
