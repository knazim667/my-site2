import React from 'react';
import {Link} from 'react-router-dom';
import * as Icon from 'react-feather';
import List from '../utils/List';



export default function ProjectContent() {
    return (
        <section className="works-area ptb-80">
			<div className="container">
				<div className="row">
                    {List.map(item => (
                        <div className="col-lg-4 col-md-6" key={item.id}>
						<div className="single-works">
							<img src={item.urls} alt="projectimages" />
                                <Link to={item.id} className="icon">
                                
                                        <Icon.Settings />
                                </Link>

							<div className="works-content">
                                <h3>
                                    <Link to={item.id}>
                                        {item.heading}
                                    </Link>
                                </h3>
								<p>{item.detail}</p>
							</div>
						</div>
					</div>
                    ))}
					

					
				</div> 
			</div>

			<div className="shape8 rotateme"><img src={require("../assets/images/shape2.svg")} alt="shape" /></div>
			<div className="shape2 rotateme"><img src={require("../assets/images/shape2.svg")} alt="shape" /></div>
			<div className="shape7"><img src={require("../assets/images/shape4.svg")} alt="shape" /></div>
			<div className="shape4"><img src={require("../assets/images/shape4.svg")} alt="shape" /></div>
		</section>
    )
}
