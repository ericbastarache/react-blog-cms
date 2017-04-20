import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BlogList from './blog/BlogList';
import CreatePost from './blog/CreatePost';

const Dashboard = () => {
  return (
    <Switch>
      <Route path="/admin/dashboard" component={DashboardIndex} />
      <Route path="/admin/posts" component={BlogList} />
      <Route path="/admin/posts/create" component={CreatePost} />
    </Switch>
  );
}

export default Dashboard;
