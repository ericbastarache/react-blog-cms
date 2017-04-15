import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({footerText}) => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-center">{footerText}</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  footerText: PropTypes.string
}

export default Footer;
