import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import About from '../about/About';
import BlogContainer from '../blog/BlogContainer';
import BlogItem from '../blog/BlogItem';
import Login from '../login/Login';

const Main = () => {
  return(
    <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/blog"  component={BlogContainer} />
      <Route path="/blog/:slug" component={BlogItem}/>
      <Route path="/login" component={Login} />
    </Switch>
      
    </div>
  );
}

export default Main;
