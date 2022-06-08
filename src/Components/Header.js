import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";

// jshint ignore:start
export default function Header(props) {
  let navStyle = {
    fontSize: "1.32rem",
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={navStyle}>
      <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link " to="/">React <span class="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link " to="/flutter">Flutter</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link " to="/vue">Vue js</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link " to="/angular">Angular</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link " to="/laravel">Laravel</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
Header.defaultProps = {
  title: "Default title"
}

Header.propTypes = {
  title: PropTypes.string
}
// jshint ignore:end