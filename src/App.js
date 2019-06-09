import React, { Component } from 'react';
import { BrowserRouter} from "react-router-dom";
import './assets/css/responsive.css';
import './assets/css/animate.css';
import Layout from './components/Layout/Layout';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
       <Layout />
        </BrowserRouter>
        
      </div>
    )
  }
}
