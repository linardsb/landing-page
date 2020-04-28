import React from 'react'
import LayoutComponent from '../components/LayoutComponent'
import SEO from '../components/SeoComponent'
import Wawe from '../components/Globals/Wawe'
import Card from '../components/Card'
import Cell from '../components/Cell'
import Section from '../components/Section'   
import Contact from '../components/Contact/Contact'


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
    <SEO title="UGOKI" keywords={[`HIIT`, `HIIT video lessons`, `health`, `medtech`, `meditation`, `intermittent fasting`, `social network`]}/>
    <div className="Hero">
      <div className="HeroGroup">
        <h1> A simple way to stay focused and full of energy while you work</h1>
        <p>We can help you gain that extra quality time where it counts the most – with family and friends; to start a new hobby or take up on old pastime again; help get that promotion; make that business idea you thought of some time ago a reality. We'll help you do all this using our unique platform.</p>
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
      </div>
      <Wawe/>
    </div>
  
    <div className="Cards"> 
      <h2>Some of the goals of this product</h2>
      <p className="IntroText">Our mobile app will be designed as a well-being, health and human performance optimisation platform. A suggestive analytics and data modelling engine will be at the core of the product, to help
and advise you on your success journey, with a personalised approach to your body type,
suggestive meal planning, physical performance and fitness the most natural way possible.</p>
      <div className="CardGroup">
        <Card
        title="Time saver"
        text="We'll help you to save time"
        image={require('../images/Dark004.png')}
         /> 
        <Card
        title="Exercise planner"
        text="We'll work together to plan your fitness"
        image={require('../images/Dark006.png')} />
        <Card
        title="Fuel for the body"
        text="We’ll help you choose a meal planner"
        image={require('../images/Dark007.png')} /> 
        <Card
        title="Track your progress"
        text="Refer to the chart to see your improvement"
        image={require('../images/Dark008.png')} /> 
        <Card
        title="Intermittent Fasting"
        text="Science and body type based (IF) cycles"
        image={require('../images/Dark009.png')} /> 
        <Card
        title="Fitness video lessons"
        text="Bite sized videos to help you stay in top form"
        image={require('../images/Dark010.png')} /> 
        <Card
        title="Social Network"
        text="Communicate and interact with other members"
        image={require('../images/dark111.png')} /> 
        <Card
        title="Research and science"
        text="Research based articles and blog posts"
        image={require('../images/dark112.png')} /> 
        </div>
    </div>
    <div className="cta"> 
      <button><Link to="#form-link">Receive email</Link></button>
    </div>
    <div id="about"></div> 
    <Section
    image={require('../images/wallpaper4.png')} 
    alt=""
    logo={require('../images/ugoki2x.png')} 
    title="About"
    text="We are a team of professionals, who see the potential and possibilities for the
    technology we use in our everyday lives to work for our wellbeing. Our experiences vary from 
    Health and Mental Health, Fitness to Digital marketing and Product development. We are constantly looking at ways to improve our platform, and deliver the latest research and news on how to optimise
    and develop your body to reach your full potential. We are currently developing and building the first iteration of our platform. Please sign up if you're interested and we'll keep you updated :) "></Section> 
    
    <SectionCaption id="features">Features continued</SectionCaption> <br></br><br></br><br></br><br></br>
    <SectionGroup>
    {staticdata.cells.map(cell => (
      <Cell 
      title={cell.title}
      image={cell.image} />
      ))}
    </SectionGroup>
    <Contact/>
  </LayoutComponent>
)

export default IndexPage

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
