import React from 'react'
import './Header.css'
import { Link } from 'gatsby'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
        this.setState({ hasScrolled: true})
    } else {
        this.setState({ hasScrolled: false})
    } 
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../../images/ugoki2x.png')} width="60" alt="" className="logo"/></Link>
          <Link to="/about">About Us</Link>
          <Link to="/features">Features</Link> 
          <Link to="../../pages/contact"><button>Keep me updated</button></Link> 
        </div>
      </div>
    )
  }
}

export default Header

