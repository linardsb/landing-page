import React from 'react'
import './Header.css'

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
          <a href="/"><img src={require('../../images/ugoki_logo.jpg')} width="100" alt=""/></a>
          <a href="/about">About Us</a>
          <a href="/features">Features</a>
          <a href="/update"><button>Keep me updated</button></a>
        </div>
      </div>
    )
  }
}

export default Header

