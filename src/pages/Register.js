import React, { Component } from 'react'
import NoSSR from 'react-no-ssr';
import { Preloader, Placeholder } from 'react-preloading-screen'
import PageTitle from '../components/PageTitle';
import RegisterArea from '../components/RegisterArea';


export default class Register extends Component {
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
                        Create your Acoount
                    </PageTitle>

                    <RegisterArea />

                 
                </Preloader>
            </NoSSR>
        )
    }
}
