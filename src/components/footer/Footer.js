import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({footerText}) => {
  return (
    <footer>
      <div className="container">
        <p>{footerText}</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  footerText: PropTypes.string
}

export default Footer;
