import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

const Navbar = ({ icon,title }) => {
  
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

// show props statically, still can pass in props to overwrite this
Navbar.defaultProps = {
  title: "Git Finder",
  icon: "fab fa-github"
};

// determine if correct prop input
// another way to check yourself
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
