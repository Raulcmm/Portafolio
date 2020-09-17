import React from 'react';
import image from '../images/avatar.webp';

import CV from '../assets/CV_Osvaldo_Raúl_Camacho.pdf';

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
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto placeat itaque quis
						porro, iste cu sint, adipisci, hic sed vero. Quia cumque inventore velit, ex
						soluta vitae reprehenderit beatae fuga adipisci, ad aliquam.
					</p>
					<a href={CV} download >
						<button className="btn cursor">Download CV</button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
