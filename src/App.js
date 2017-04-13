import React, { Component } from 'react';

//Component imports
import About from './components/About';
import BlogContainer from './containers/BlogContainer';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header headerText="React Blog CMS"/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog"  component={BlogContainer} />
          <Route path="/login" component={Login} />
          <Footer footerText="&copy; Copyright 2017"/>
        </div>
    </Router>
    );
  }
}

export default App;
