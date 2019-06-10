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
import Project from './pages/Project';
import PupsterDetail from './pages/PupsterDetail';
import ClickyDetail from './pages/ClickyDetail';

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

        <Route
        exact path="/projects" component={Project} />

        <Route
        exact path="/pupster" component={PupsterDetail} />

        <Route
        exact path="/clicky" component={ClickyDetail} />
       <Footer />
        </Router>
        
      </div>
    )
  }
}
