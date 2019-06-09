import React from 'react';
import * as Icon from 'react-feather';
import './Boxes.css';

const BoxArea = (props) => {
    return (
        <section className="boxes-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="single-box">
							<div className="icon">
                                <Icon.Code />
							</div>
							<h3>Web Development</h3>
							<p>Coding is my principal role, I love converting a PSD or inDesign file to a beautiful responsive website. I tend to code things from scratch and I enjoy bringing new ideas to life.</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-f78acb">
							<div className="icon">
                                <Icon.Camera />
							</div>
							<h3>Graphic Design</h3>
							<p>Designing has been always my passion in parallel with Web development, I always try to learn news tricks and bring them to life in real projects. I designed couple web pages and logos from scratch</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-c679e3">
							<div className="icon">
                                <Icon.Triangle />
							</div>
							<h3>QA Engineer</h3>
							<p>Aside from Coding and designing , testing my code or someone else's before pushing it to production is very important. It decreases the chance of breaking the system.</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="single-box bg-eb6b3d">
							<div className="icon">
                                <Icon.Server />
							</div>
							<h3>Database</h3>
							<p>Try to divide information carefully among tables to eliminate data redundancy. Provides access with information a user needs to join tables together. Ensures data accuracy and integrity.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default BoxArea
