import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const Services = () => {
	const data = useStaticQuery(graphql`
		query MyQuery {
			allDatoCmsService {
				nodes {
					id
					description
					service
					image {
						url
					}
				}
			}
		}
	`);

	// console.log(data);
	const arrservices = data.allDatoCmsService.nodes;

	return (
		<section className=" services container" id="services">
			<h2>Services</h2>
			<div className="content-services">
				{arrservices.map((service) => (
					<div key={service.id} className="service">
						<img src={service.image.url} alt={service.service}/>
						<h3>{service.service}</h3>
						<p>{service.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
