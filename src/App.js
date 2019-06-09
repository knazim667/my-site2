import React, { Component } from 'react';
import { BrowserRouter} from "react-router-dom";
import Header from './components/Layout/Header';
import MainBanner from './components/MainBanner/MainBanner';
import Boxes from './components/Boxes/Boxes';
import './assets/css/responsive.css';
import './assets/css/animate.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Header />
        <MainBanner />
        <Boxes />
        </BrowserRouter>
        
      </div>
    )
  }
}
