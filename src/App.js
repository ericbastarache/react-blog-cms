import React, { Component } from 'react';

//Component imports
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header headerText="React Blog CMS"/>
            <Main />
          <Footer footerText="&copy; Copyright 2017"/>
        </div>
      </Router>
    );
  }
}

export default App;
