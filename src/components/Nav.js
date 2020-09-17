import React from 'react';
import logoRcm from '../images/logoRcm_corto.jpg';
import { Menu } from './Menu';
const Nav = () => {
	const showMenu = () => {
		const menu = document.getElementById('menu');
		menu.classList.toggle('show-menu');
	};

	return (
		<div className="barra-container">
			<Menu />

			<div className="barra-content container">
				<a href="#home">
					<img src={logoRcm} alt="Logo RCM" />
				</a>

				<i className="fas fa-bars cursor" onClick={showMenu} />

				<nav className="nav">
					<ul>
						<li>
							<a href="#home" rel="noreferrer">
								Home
							</a>
						</li>
						<li>
							<a href="#about" rel="noreferrer">
								About me
							</a>
						</li>
						<li>
							<a href="#services" rel="noreferrer">
								Services
							</a>
						</li>
						<li>
							<a href="#projects" rel="noreferrer">
								Projects
							</a>
						</li>
						<li>
							<a href="#skills" rel="noreferrer">
								Skills
							</a>
						</li>
						<li>
							<a href="#contact" rel="noreferrer">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Nav;
