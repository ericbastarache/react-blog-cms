import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const DashboardIndex = () => {
  return (
    <div id="wrapper">
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/dashboard/posts">Posts</Link>
          </li>
          <li>
            <Link to="/admin/dashboard/posts/create">Create Post</Link>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardIndex;
