import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon,title }) => {
  
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

// show props statically, still can pass in props to overwrite this
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

// determine if correct prop input
// another way to check yourself
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
