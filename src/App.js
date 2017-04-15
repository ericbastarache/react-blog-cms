import React, { Component } from 'react';

//Component imports
import About from './components/about/About';
import BlogContainer from './components/blog/BlogContainer';
import BlogItem from './components/blog/BlogItem';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header headerText="React Blog CMS"/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/blog"  component={BlogContainer} />
          <Route path="/blog/:slug" component={BlogItem}/>
          <Route path="/login" component={Login} />
          <Footer footerText="&copy; Copyright 2017"/>
        </div>
    </Router>
    );
  }
}

export default App;
