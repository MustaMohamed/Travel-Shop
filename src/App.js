import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './app/pages/Home';
import About from './app/pages/About';
import Navbar from './app/components/Navbar';

class App extends Component {


  render() {
    return (
      <div>
        <Router basename={'Travel-Shop'}>
          <Navbar/>

          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
        </Router>
      </div>
    );
  }
}

export default App;
