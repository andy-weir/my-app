import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className='HeaderGroup'>
          <Link to="/"><img src="https://www.feathr.co/hs-fs/hubfs/Feathr%20Logo-Main%20(1).png?width=150&height=63&name=Feathr%20Logo-Main%20(1).png" height="32" alt="Feathr Logo" /></Link>
          
          <div className='HeaderItems'>
            <Link to="/courses">Solutions</Link>
            <Link to="/courses">Platform</Link>
            <Link to="/courses">Pricing</Link>
            <Link to="/courses">Resources</Link>
          </div>

          <div className='HeaderActions'>
            <Link to="/courses">Login</Link>
            <button className="HeaderButton">Sign up</button>
          </div>
        </div>  
      </div>
    )
  }
}

export default Header