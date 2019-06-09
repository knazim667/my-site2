import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/css/responsive.css';
import './assets/css/animate.css';
import Layout from './components/Layout/Layout';
import './App.css'
import Header from './components/Layout/Header';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
        <Route
        exact path="/" component={Layout} />
        <Route
        exact path="/contact" component={Contact} />

        <Route
        exact path="/about" component={AboutMe} />
       <Footer />
        </Router>
        
      </div>
    )
  }
}
