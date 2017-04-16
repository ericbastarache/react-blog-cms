import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ActionContainer = ({actionText, actionLinkText}) => {
  return (
    <Link to={"/admin/dashboard/" + actionLinkText}>
      <div className="action-container">
        <h3 className="text-center">{actionText}</h3>
      </div>
    </Link>
  );
}

ActionContainer.propTypes = {
  actionText: PropTypes.string,
  actionLink: PropTypes.string
}

export default ActionContainer;
