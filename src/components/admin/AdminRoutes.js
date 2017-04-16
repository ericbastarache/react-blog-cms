import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import CreatePost from './blog/CreatePost';
import UpdatePost from './blog/UpdatePost';

const AdminRoutes = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashbaord} />
      <Route path="/dashboard/create" component={CreatePost} />
      <Route path="/dashboard/update/:id" component={UpdatePost} />
    </Switch>
  )
}

export default AdminRoutes;
