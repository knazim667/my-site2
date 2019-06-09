import React from 'react'
import {Link} from 'react-router-dom'
import * as Icon from 'react-feather';
import OwlCarousel from 'react-owl-carousel3';


const slideOptions = {
    items: 4,
    loop: true,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        786: {
            items: 2
        },
        1200: {
            items: 3
        },
       1400:{
           items : 3
       }
    }
}

class RecentWork extends React.Component {
    render() {
        return (
            <section className="works-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>My Recent Works</h2>
                        <div className="bar"></div>
                        <p>A Selection of
                            12 case studies
                            with over 18 Projects and Assignments here is some of My Work.</p>
                    </div>
                </div>

                <div className="row m-0">
                    {/* <div className="works-slides"> */}
                    <OwlCarousel 
                        className="owl-theme"
                        {...slideOptions}
                    >
                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../assets/images/works-image/1.jpg")} alt="pupster" />

                                    <Link to="/pupster" className="icon">
                                        
                                            <Icon.Settings />
                                      
                                    </Link>

                                    <div className="works-content">
                                        <h3>
                                            <Link to="#">
                                                Incredible infrastructure
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../assets/images/works-image/2.jpg")} alt="image" />

                                    <Link to="#" className="icon">
                                      
                                            <Icon.Settings />
                                
                                    </Link>

                                    <div className="works-content">
                                        <h3>
                                            <Link to="#" >
                                                Incredible infrastructure
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../assets/images/works-image/3.jpg")} alt="image" />

                                    <Link to="#" className="icon">
                                        
                                            <Icon.Settings />
                                   
                                    </Link>

                                    <div className="works-content">
                                        <h3>
                                            <Link to="#">
                                                Incredible infrastructure
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../assets/images/works-image/4.jpg")} alt="image" />

                                    <Link to="#" className="icon">
                                      
                                            <Icon.Settings />
                                    
                                    </Link>

                                    <div className="works-content">
                                        <h3>
                                            <Link to="#">
                                                Incredible infrastructure
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="col-lg-12">
                                <div className="single-works">
                                    <img src={require("../../assets/images/works-image/5.jpg")} alt="image" />

                                    <Link to="#" className="icon">
                                       
                                            <Icon.Settings />
                                        
                                    </Link>
                                    
                                    <div className="works-content">
                                        <h3>
                                            <Link to="#">
                                                Incredible infrastructure
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </OwlCarousel>

                    {/* </div> */}
                </div>

                <div className="shape8 rotateme">
                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../assets/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../assets/images/shape4.svg")} alt="shape" />
                </div>
            </section>
        )
    }
}

export default RecentWork
