import React from 'react';
import Nav from './Nav';

const Header = () => {
	return (
		<header className="hero" id="home">
			<Nav />
			<div className="container container-hero">
				<div className="content-hero">
					<div className="info">
						<h1>
							Raúl Camacho M.
							<span>Software Engineer | Web Developer</span>
						</h1>
						<div className="social-media">
							<ul>
								<li className="github">
									<span>Github</span>
									<a href="https://github.com/Raulcmm/" target="_blank" rel="noreferrer">
										<i className="fab fa-github" />
									</a>
								</li>
								<li className="twitter">
									<span>Twitter</span>
									<a href="https://twitter.com/RaulCamachoM" target="_blank" rel="noreferrer">
										<i className="fab fa-twitter" />
									</a>
								</li>
								<li className="linkedin">
									<span>LinkedIn</span>
									<a
										href="https://www.linkedin.com/in/raul-camacho-rcm/"
										target="_blank"
										rel="noreferrer"
									>
										<i className="fa fa-linkedin" />
									</a>
								</li>
								<li className="email">
									<span>Email</span>
									<a href="mailto:rauldevcam@gmail.com?Subject=Contacto trabajo" rel="noreferrer">
										<i className="far fa-envelope" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div >
		</header>
	);
};

export default Header;
