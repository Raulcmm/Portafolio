import React from 'react';
import image from '../images/avatar.webp';

import CV from '../assets/CV_Raul_Camacho.pdf';

const About = () => {
	return (
		<section className="container-about container" id="about">
			<h2>About me</h2>
			<div className="content-about">
				<div className="whoiam">
					<h3>Who i am?</h3>
					<img src={image} alt="Raúl Camacho" />
				</div>
				<div className="details-about">
					<p>
						I'm raul camacho, web developer and software engineer, development is an important part of my
						life 

					</p>
					<a href={CV} download>
						<button className="btn cursor">Download CV</button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
