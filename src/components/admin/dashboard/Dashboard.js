import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-center">This is the Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/admin/dashboard/create">Create Post</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
