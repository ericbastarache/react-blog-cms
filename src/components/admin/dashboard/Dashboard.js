import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Switch>
      <Route path="/admin/dashboard" component={DashboardIndex} />
    </Switch>
  );
}

export default Dashboard;
