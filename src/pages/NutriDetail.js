import React, { Component } from 'react';
import * as Icon from 'react-feather';
import PageTitle from '../components/PageTitle';
import { Preloader, Placeholder } from 'react-preloading-screen';




export default class NutriDetail extends Component {
    

    render() {
        
        return (
            <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <PageTitle>
                My Nutri Advisor Detail
            </PageTitle>
            <section className="project-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/nutrition/nutrition.png")} alt="nutri" />

                                
                            </div>
                        </div>
                        

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/nutrition/nutri-1.png")} alt="nutri" />

                               
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/nutrition/nutri-2.png")} alt="nutri" />

                                
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/nutrition/nutri-3.png")} alt="nutri" />

                         
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="project-details-desc">
                                <h3>My Nutri Advisor</h3>
                                
                                <p>MyNutriAdvisor is a free, online service providing personalized health and fitness recommendations. We are a group of developers trying to make the world a healthier place using code.</p>

                                <p>Project developed as a student with UCLA Coding Bootcamp, The My Nutri Advisor Desktop app is a Express js, handlebars.js application build with Materialized Framework. My part of coding was FrontEnd development in this project.</p>
                               
                               <p>I was need to design all the website according to the mockups. as a part of group we discuss all of style about the designing and apply to a website to see how looks and how we can better more. its was a good experience to design a website.</p>
                                
                                <div className="project-details-information">
                                    <div className="single-info-box">
                                        <h4>Happy Client</h4>
                                        <p>UCLA Bootcamp</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Category</h4>
                                        <p>Project</p>
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
                                        <a href="https://mysterious-cliffs-28194.herokuapp.com" className="btn btn-primary" role="button" target="_blank" rel="noopener noreferrer">Live Preview</a>
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
