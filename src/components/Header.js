import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({headerText}) => {
  return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">{headerText}</a>
        </div>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/login">Login</Link></li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  headerText: PropTypes.string
}


export default Header;
