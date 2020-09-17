import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const Contact = () => {
	const dataContact = useStaticQuery(graphql`
		query {
			allDatoCmsContact {
				nodes {
					id
					title
					link
					image {
						url
					}
				}
			}
		}
	`);

	const arrContact = dataContact.allDatoCmsContact.nodes;
	return (
		<section className=" contacts container" id="contact">
			<h2>Contact me</h2>
			<div className="container-contacts ">
				{arrContact.map((contact) => (
					<a className="contact cursor" key={contact.id} href={contact.link} target="_blank" rel="noreferrer">
						<img src={contact.image.url} alt={contact.title} />
						<h3>{contact.title}</h3>
					</a>
				))}
			</div>
		</section>
	);
};

export default Contact;
