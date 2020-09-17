import React from 'react';

export const Menu = () => {
	const hideMenu = () => {
        const menu = document.getElementById('menu');
        menu.classList.remove('show-menu');
	};
	return (
		<section id="menu" className="container section-menu animate__animated animate__fadeInRight">
			<div className="menu-container">
				<nav className="nav">
					<ul>
						<li >
							<a onClick={hideMenu} href="#home" rel="noreferrer">
								Home
							</a>
						</li>
						<li >
							<a onClick={hideMenu} href="#about" rel="noreferrer">
								About me
							</a>
						</li>
						<li >
							<a onClick={hideMenu} href="#services" rel="noreferrer">
								Services
							</a>
						</li>
						<li >
							<a onClick={hideMenu} href="#projects" rel="noreferrer">
								Projects
							</a>
						</li>
						<li >
							<a onClick={hideMenu} href="#skills" rel="noreferrer">
								Skills
							</a>
						</li>
						<li >
							<a onClick={hideMenu} href="#contact" rel="noreferrer">
								Contact
							</a>
						</li>
					</ul>
				</nav>
				<i className="far fa-times-circle" onClick={hideMenu}/>
			</div>
		</section>
	);
};
