import React, { Component } from 'react';
import * as Icon from 'react-feather';
import PageTitle from '../components/PageTitle';
import { Preloader, Placeholder } from 'react-preloading-screen';




export default class ClickyDetail extends Component {
    

    render() {
        
        return (
            <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <PageTitle>
                Clicky Game Detail
            </PageTitle>
            <section className="project-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/Project-images/clicky.png")} alt="Clicky" />

                                
                            </div>
                        </div>
                        

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/clicky-images/clicky-game.jpg")} alt="Clicky" />

                               
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/clicky-images/cliky-1.png")} alt="Clicky" />

                                
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src={require("../assets/images/clicky-images/clicky-2.png")} alt="Clicky" />

                         
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="project-details-desc">
                                <h3>Clicky Game</h3>
                                
                                <p>Clicky Game Desktop React javascript web application build on top of the Bootstrap framework.</p>

                                <p>Project developed as a student with UCLA Coding Bootcamp, The Clicky Game Desktop app is a React eb application build with Bootstrap Framework. The app should render 12 different images (of your choice) to the screen. Each image should listen for click events. In this activity i was work to create an entire React application, Test your memory with your favorite friends from The Simpsons.
                                Click on each character once to win the game. But don't click on a character twice, or it's game over for you! The app should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.</p>
                                
                                <p>Click on each character once to win the game. But don't click on a character twice, or it's game over for you! The app should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.</p>
                                
                                <div className="project-details-information">
                                    <div className="single-info-box">
                                        <h4>Happy Client</h4>
                                        <p>UCLA Bootcamp</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Category</h4>
                                        <p>Assignment</p>
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
                                        <a href="https://knazim667.github.io/clicky-game-2/" className="btn btn-primary" role="button" target="_blank" rel="noopener noreferrer">Live Preview</a>
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
