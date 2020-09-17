import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<h3>All rights reserved {new Date().getFullYear()}</h3>
                <small>Made with <span aria-label="Close" role="img">🖤</span> in Gatsby / React</small>
			</div>
		</footer>
	);
};

export default Footer;
