import React from 'react'
import {Link} from 'react-router-dom';
import ReactWOW from 'react-wow';
import Button from '../Button/Button';
// import './MainBanner.css';


const MainBanner = () => {
    return (
		<div className="main-banner">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-5">
								<div className="hero-content">
									<h1>Muhammad Nazam <span className="react">React.js / Node.js</span> <br/> Web Developer</h1>
									<p>Versatile Full Stack Developer | Front End Developer  with 1 Year of Experience Designing, Developing, and Managing complex e-commerce sites, and internal frameworks. Specialized in Javascript (ES5 + ES6 ) and Responsive Design. Excellent Communication, and ability to learn rapidly. Seeking Front End Developer Role, Open to Relocate.</p>
									
									<Link to="#">
										<Button btnType="btn-primary">Get Started</Button>
									</Link>
								</div>
							</div>

							<div className="col-lg-6 offset-lg-1">
								<div className="banner-image">
                                    <ReactWOW delay='0.5s' animation='fadeInDown'>
                                        <img 
                                            src={require('../../assets/images/banner-image/man.png')} 
                                            className="wow fadeIn" 
                                            data-wow-delay="0.6s" 
                                            alt="man" 
                                        />
                                    </ReactWOW>
                                    <ReactWOW delay='0.5s' animation='fadeInUp'>
                                        <img 
                                            src={require("../../assets/images/banner-image/code.png")} 
                                            className="wow fadeIn" 
                                            data-wow-delay="0.6s" 
                                            alt="code"
                                        />
                                    </ReactWOW>
                                    <ReactWOW delay='0.5s' animation='fadeInLeft'>
                                        <img 
                                            src={require("../../assets/images/banner-image/carpet.png")} 
                                            className="wow fadeInLeft" 
                                            data-wow-delay="0.6s" 
                                            alt="carpet"
                                        />
                                    </ReactWOW>
                                    <ReactWOW delay='0.5s' animation='zoomIn'>
                                        <img 
                                            src={require("../../assets/images/banner-image/bin.png")} 
                                            className="wow zoomIn" 
                                            data-wow-delay="0.6s" 
                                            alt="bin"
                                        />
                                    </ReactWOW>
                                    <ReactWOW delay='0.5s' animation='bounceIn'>
                                        <img 
                                            src={require("../../assets/images/banner-image/book.png")} 
                                            className="wow bounceIn" 
                                            data-wow-delay="0.6s" 
                                            alt="book"
                                        />
                                    </ReactWOW>
                                    <ReactWOW delay='0.5s' animation='fadeInDown'>
                                        <img 
                                            src={require("../../assets/images/banner-image/dekstop.png")} 
                                            className="wow fadeInDown" 
                                            data-wow-delay="0.6s" 
                                            alt="dekstop"
                                        />
                                    </ReactWOW>
                                    <ReactWOW delay='0.5s' animation='zoomIn'>
                                        <img 
                                            src={require("../../assets/images/banner-image/dot.png")} 
                                            className="wow zoomIn" 
                                            data-wow-delay="0.6s" 
                                            alt="dot"
                                        />
                                    </ReactWOW>
                                    <ReactWOW delay='0.5s' animation='fadeInUp'>
                                        <img 
                                            src={require("../../assets/images/banner-image/flower-top-big.png")} 
                                            className="wow fadeInUp" 
                                            data-wow-delay="0.6s" 
                                            alt="flower-top-big"
                                        />
                                    </ReactWOW>
                                    <ReactWOW delay='0.5s' animation='rotateIn'>
                                        <img 
                                            src={require("../../assets/images/banner-image/flower-top.png")} 
                                            className="wow rotateIn" 
                                            data-wow-delay="0.6s" 
                                            alt="flower-top"
                                        />
                                    </ReactWOW>
                                    <ReactWOW delay='0.5s' animation='fadeInUp'>
                                        <img 
                                            src={require("../../assets/images/banner-image/keyboard.png")} 
                                            className="wow fadeInUp" 
                                            data-wow-delay="0.6s" 
                                            alt="keyboard"
                                        />
                                    </ReactWOW>
                                    <ReactWOW delay='0.5s' animation='zoomIn'>
                                        <img 
                                            src={require("../../assets/images/banner-image/pen.png")} 
                                            className="wow zoomIn" 
                                            data-wow-delay="0.6s" 
                                            alt="pen"
                                        />
                                    </ReactWOW>
                                    <ReactWOW delay='0.5s' animation='zoomIn'>
                                        <img 
                                            src={require("../../assets/images/banner-image/table.png")} 
                                            className="wow zoomIn" 
                                            data-wow-delay="0.6s" 
                                            alt="table"
                                        />
                                    </ReactWOW>
                                    <ReactWOW delay='0.5s' animation='fadeInLeft'>
                                        <img 
                                            src={require("../../assets/images/banner-image/tea-cup.png")} 
                                            className="wow fadeInLeft" 
                                            data-wow-delay="0.6s" 
                                            alt="tea-cup"
                                        />
                                    </ReactWOW>
                                    <ReactWOW delay='0.5s' animation='rollIn'>
                                        <img 
                                            src={require("../../assets/images/banner-image/headphone.png")} 
                                            className="wow rollIn" 
                                            data-wow-delay="0.6s" 
                                            alt="headphone"
                                        />
                                    </ReactWOW>
                                    <ReactWOW delay='0.5s' animation='fadeInUp'>
                                        <img 
                                            src={require("../../assets/images/banner-image/main-pic.png")} 
                                            className="wow fadeInUp" 
                                            data-wow-delay="0.6s" 
                                            alt="main-pic"
                                        />
                                    </ReactWOW>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="shape1">
				<img src={require("../../assets/images/shape1.png")} alt="shape"/>
			</div>
			<div className="shape2 rotateme">
				<img src={require("../../assets/images/shape2.svg")} alt="shape"/>
			</div>
			<div className="shape3">
				<img src={require("../../assets/images/shape3.svg")} alt="shape"/>
			</div>
			<div className="shape4">
				<img src={require("../../assets/images/shape4.svg")} alt="shape"/>
			</div>
			<div className="shape5">
				<img src={require("../../assets/images/outlook-icon-png-2175.png")} alt="shape"/>
			</div>
			<div className="shape6 rotateme">
				<img src={require("../../assets/images/shape4.svg")} alt="shape"/>
			</div>
			<div className="shape7">
				<img src={require("../../assets/images/shape4.svg")} alt="shape"/>
			</div>
			<div className="shape8 rotateme">
				<img src={require("../../assets/images/shape2.svg")} alt="shape"/>
			</div>
		</div>
    )
}

export default MainBanner