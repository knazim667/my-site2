import React from 'react';
import {Link} from 'react-router-dom';
import * as Icon from 'react-feather';

const list = [
    {
        id : '/pupster',
        urls : require('../assets/images/Project-images/600.jpg'),
        heading : 'Pupster',
        detail : "Pupster Desktop React javascript web application build on top of the Bootstrap framework."
    },
    {
        id : '/clicky',
        urls : require('../assets/images/Project-images/clicky.png'),
        heading : 'Clicky Game',
        detail : "Test your memory with your favorite friends from The Simpsons. Click on each character once to win the game. But don't click on a character twice, or it's game over for you!"
    },
    {
        id : '/devonline',
        urls : require('../assets/images/Project-images/devonline.png'),
        heading : 'Dev Online',
        detail : "Dev Online is a free, online service Bootsrap framework website with scroll reavel animation and Mobile responsive."
    },
    {
        id : '/imove',
        urls : require('../assets/images/Project-images/imove.jpg'),
        heading : 'I Heart Movie',
        detail : "This is Movie Search website where you can find the newest movies and news related to movies, also you can add or read reviews."
    },
    {
        id : '/nutrition',
        urls : require('../assets/images/Project-images/nutrition.jpg'),
        heading : 'My Nutrition',
        detail : "MyNutriAdvisor is a free, online service providing personalized health and fitness recommendations. We are a group of developers trying to make the world a healthier place using code."
    },
    {
        id : '/train',
        urls : require('../assets/images/Project-images/train.jpg'),
        heading : 'Train Scheduler',
        detail : "Used Firebase to host a globally available set of data that is retrieved and manipulated using Moment.js to provide up-to-date information about various trains' arrival times and minutes to arrival."
    }
]

export default function ProjectContent() {
    return (
        <section className="works-area ptb-80">
			<div className="container">
				<div className="row">
                    {list.map(item => (
                        <div className="col-lg-4 col-md-6">
						<div className="single-works">
							<img src={item.urls} alt="image" />
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
