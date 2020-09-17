import React from 'react';

// !!Componetes
import Layout from '../components/layout';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const IndexPage = () => (
	<Layout>
		<Header />
		<About />
		{/* <hr /> */}
		<Services />
		{/* <hr /> */}
		<Projects />
		{/* <hr /> */}
		<Skills />
		<Contact />
		<Footer />
	</Layout>
);

export default IndexPage;
