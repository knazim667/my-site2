import React, {Component, Fragment } from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';

import MainBanner from '../MainBanner/MainBanner';
import BoxArea from '../Boxes/Boxes';
import RecentWork from '../RecentWork/RecentWork';
import '../../assets/css/style.css';
import Blog from '../Blog';
// import GoTop from '../GoTop.js';


class Layout extends Component {
        render(){
        return (
            <Fragment>
                <Preloader>
                <Placeholder>
                        <div className="preloader">
                            <div className="spinner"></div>
                        </div>
                    </Placeholder>

                   
                    <MainBanner />
                    <BoxArea />
                    <RecentWork />
                    <Blog />
                  
                    {/* <GoTop scrollStepInPx="50" delayInMs="16.66" /> */}
                </Preloader>
            </Fragment>
        )
    }
}

export default Layout;