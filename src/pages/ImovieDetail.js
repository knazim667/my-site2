import React, { Component } from 'react';
import * as Icon from 'react-feather';
import PageTitle from '../components/PageTitle';
import { Preloader, Placeholder } from 'react-preloading-screen';




export default class ImovieDetail extends Component {
    

    render() {
        
        return (
            <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <PageTitle>
                I Heart Movie Detail
            </PageTitle>
            <section className="project-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/imovie/i-1.png")} alt="Imovie" />

                                
                            </div>
                        </div>
                        

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/imovie/i-2.png")} alt="Imovie" />

                               
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/imovie/i-3.png")} alt="Imovie" />

                                
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/imovie/i-4.png")} alt="Imovie" />

                         
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="project-details-desc">
                                <h3>I Heart Movie</h3>
                                
                                <p>This is Movie Search website where you can find the newest movies and news related to movies, also you can add or read reviews.</p>

                                <p>Project developed as a student with UCLA Coding Bootcamp, The I Heart Movie Desktop app is a Slick Slider, javascript, Ajax, MDB API application build with Materialized Framework.</p>
                                
                                <p>In this Project My Part of Coding was Get Data from Api about Movies and by Genre, by Search, By Top five, and implement on a website front page and also design a website with Slick Sliders, as a part of group member my responsibility to work good with front end and get latest data.</p>

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
                                        <a href="https://knazim667.github.io/iheart-movie/" className="btn btn-primary" role="button" target="_blank" rel="noopener noreferrer">Live Preview</a>
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
