/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from 'react';
import '../sass/main.scss';
import { Helmet } from 'react-helmet';

const Layout = (props) => {
	return (
		<Fragment>
			<Helmet>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;700;900&family=Special+Elite&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
					integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
					crossorigin="anonymous"
				/>

				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
				/>
				<script src="https://kit.fontawesome.com/a75cbd20e0.js" crossorigin="anonymous" />
				<link rel="icon" type="image/jgp" href="./assets/logoRcm_corto.jpg" />

				<title>Portafolio</title>
			</Helmet>
			{props.children}
		</Fragment>
	);
};

export default Layout;
