import React, { Component } from 'react';
import * as Icon from 'react-feather';
import PageTitle from '../components/PageTitle';
import { Preloader, Placeholder } from 'react-preloading-screen';




export default class TrainDetail extends Component {
    

    render() {
        
        return (
            <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <PageTitle>
                Train Scheduler Detail
            </PageTitle>
            <section className="project-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/train/train-sheduler.jpg")} alt="train" />

                                
                            </div>
                        </div>
                        

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/train/train1.png")} alt="train" />

                               
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/train/train-2.png")} alt="train" />

                                
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/Project-images/train.jpg")} alt="train" />

                         
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="project-details-desc">
                                <h3>Train Scheduler</h3>
                                
                                <p>Train Scheduler Desktop React javascript & Moment js, web application build on top of the Bootstrap framework.</p>
                                <p>Project developed as a student with UCLA Coding Bootcamp, The Train Scgeduler Desktop app is a javascript and Moment js web application build with Bootstrap Framework. In this activity i was work to create an entire Web application from scratch, complete with Moment.js , Javascript and design in Bootstrap.</p> 
                                <p>Accepts user input to add new train name, start time and frequency to schedule. Displays schedule in repeating table with next arrival based on current time and frequency of train stops. Stores Train info in Firebase for data persistence and retreives information from database on load. Schedules refresh every minute to reflect updated arrival information.</p> 

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
                                        <a href="https://knazim667.github.io/Train-shceduler/" className="btn btn-primary" role="button" target="_blank" rel="noopener noreferrer">Live Preview</a>
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
