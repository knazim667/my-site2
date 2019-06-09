import React, { Component } from 'react'
import NoSSR from 'react-no-ssr';
import { Preloader, Placeholder } from 'react-preloading-screen'
import PageTitle from '../components/PageTitle';
import AboutArea from '../components/AboutArea';
import FeatureContent from '../components/FeatureContent';

export default class AboutMe extends Component {
    render() {
        return (
            <NoSSR>
                <Preloader>
                    <Placeholder>
                        <div className="preloader">
                            <div className="spinner"></div>
                        </div>
                    </Placeholder>
                
                    <PageTitle>
                        About Me
                    </PageTitle>

                    <AboutArea />

                    <FeatureContent />
                </Preloader>
            </NoSSR>
        )
    }
}
