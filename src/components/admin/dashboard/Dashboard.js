import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardIndex from './DashboardIndex';
import BlogList from './blog/BlogList';
import CreatePost from './blog/CreatePost';
import UpdatePost from './blog/UpdatePost';

const Dashboard = () => {
  return (
    <Switch>
      <Route exact path="/admin/dashboard" component={DashboardIndex} />
      <Route path="/admin/dashboard/allPosts" component={BlogList} />
      <Route path="/admin/dashboard/createPost" component={CreatePost} />
      <Route path="/admin/dashboard/updatePost/:id" component={UpdatePost} />
    </Switch>
  );
}

export default Dashboard;
