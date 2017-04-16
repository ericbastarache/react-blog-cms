import React from 'react';
import ActionContainer from '../blog/ActionContainer';
import '../blog/Blog.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <ActionContainer actionText="List Posts" actionLinkText="list"/>
        </div>
        <div className="col-md-3">
          <ActionContainer actionText="View Statistics" actionLinkText="statistics"/>
        </div>
        <div className="col-md-3">
          <ActionContainer actionText="Some Dummy Text" actionLinkText="dummy"/>
        </div>
        <div className="col-md-3">
          <ActionContainer actionText="Some Dummy Text" actionLinkText="dummy"/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
