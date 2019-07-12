import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
  // show props statically, still can pass in props to overwrite this
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }

  // determine if correct prop input
  // another way to check yourself 
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }
    render() {
        return (
            <nav className='navbar bg-primary'>
               <h1>
                 <i className={this.props.icon}/> {this.props.title}
               </h1> 
            </nav>
        )
    }
}

export default Navbar
