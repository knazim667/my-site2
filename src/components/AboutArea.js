import React from 'react';

export default function AboutArea() {
    return (
        <section className="about-area ptb-80">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="about-image">
							<img src={require("../assets/images/1.png")} alt="abouarea" />
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="about-content">
							<div className="section-title">
								<h2>About Me</h2>
								<div className="bar"></div>
								<p>My Name is <b>Muhammad Nazam</b> I am a Versatile <b>Full Stack Developer | Front End Developer</b>  with Years of Experience <b>Designing</b>, <b>Developing</b>, and Managing complex <b>E-Commerce</b> sites, and internal frameworks.</p>
									
								</div>

							<p>Specialized in <b>Javascript (ES5 + ES6 )</b> and Responsive Design. Excellent Communication, and ability to learn rapidly. Seeking Front End Developer Role, Open to Relocate.</p>

							<p>My purpose is to help you build your online <b>Business presence!</b> Furthermore, have a website or an application no matter what type of website if it’s for a small business, service provider, individual, organization, or a Company.</p>
							<p>Today people are always searching for businesses, companies, or services on the internet, why don’t you be one of their options?</p>
						</div>
					</div>
				</div>

				</div>
		</section>
    )
}