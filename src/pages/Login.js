import React, { Component } from 'react'
import NoSSR from 'react-no-ssr';
import { Preloader, Placeholder } from 'react-preloading-screen'
import PageTitle from '../components/PageTitle';
import LoginArea from '../components/LoginArea';

export default class Login extends Component {
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
                        Sign Into Your Account
                    </PageTitle>

                    <LoginArea />

                 
                </Preloader>
            </NoSSR>
        )
    }
}
