import React, { Component } from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Header from './Header';
import MainBanner from '../MainBanner/MainBanner';
import BoxArea from '../Boxes/Boxes';
import RecentWork from '../RecentWork/RecentWork';
import '../../assets/css/style.css';
import Blog from '../Blog';
import Footer from '../Footer';
import GoTop from '../GoTop.js';

export default class Layout extends Component {
    render() {
        return (
            <NoSSR>
                <Preloader>
                <Placeholder>
                        <div className="preloader">
                            <div className="spinner"></div>
                        </div>
                    </Placeholder>

                    {/* <Header /> */}
                    <MainBanner />
                    <BoxArea />
                    <RecentWork />
                    <Blog />
                    {/* <Footer /> */}
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                </Preloader>
            </NoSSR>
        )
    }
}
