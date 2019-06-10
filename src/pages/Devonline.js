import React, { Component } from 'react';
import * as Icon from 'react-feather';
import PageTitle from '../components/PageTitle';
import { Preloader, Placeholder } from 'react-preloading-screen';




export default class DevDetail extends Component {
    

    render() {
        
        return (
            <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <PageTitle>
                Dev Online Detail
            </PageTitle>
            <section className="project-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/devonline/Dev-online-1.png")} alt="Devonline" />

                                
                            </div>
                        </div>
                        

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/devonline/Dev-online-2.png")} alt="Devonline" />

                               
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/devonline/Dev-online-4.png")} alt="Devonline" />

                                
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/devonline/Dev-online-5.png")} alt="Devonline" />

                         
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="project-details-desc">
                                <h3>Dev Online</h3>
                                
                                <p>Dev Online is a free, online service Bootsrap framework website with scroll reavel animation and Mobile responsive.</p>

                                <p>Project developed as a student with UCLA Coding Bootcamp, The dev online Desktop app is a Bootstrap framework. Entirly project i did.
                                Self Thought design website color scheme and button style.</p>
                                
                                <div className="project-details-information">
                                    <div className="single-info-box">
                                        <h4>Happy Client</h4>
                                        <p>Self Test</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Category</h4>
                                        <p>Practice</p>
                                    </div>

                                    

                                    <div className="single-info-box">
                                        <h4>Share</h4>
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com"><Icon.Facebook/></a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com"><Icon.Twitter/></a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com"><Icon.Instagram/></a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com"><Icon.Linkedin/></a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="single-info-box">
                                        <a href="https://knazim667.github.io/Responsive-landing-page/" className="btn btn-primary" role="button" target="_blank" rel="noopener noreferrer">Live Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Preloader>
        )
    }
}
