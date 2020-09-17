import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Projects = () => {
	const data = useStaticQuery(graphql`
		query {
			allDatoCmsProject {
				nodes {
					id
					name
					technologie
					livedemo
					description
					image {
						fluid {
							...GatsbyDatoCmsFluid
						}
					}
				}
			}
		}
	`);
	const arrTechnologies = data.allDatoCmsProject.nodes;

	// console.log(arrTechnologies);
	return (
		<section className="content-projects container" id="projects">
			<h2>My Projects</h2>
			<div className="cards">
				{arrTechnologies.map((technologie) => (
					<a
						className="card "
						key={technologie.id}
						href={technologie.livedemo}
						target="_blank"
						rel="noreferrer"
					>
						<h3>{technologie.name}</h3>
						<div className="description">
							<Image fluid={technologie.image.fluid} className="img-project" />
							<p>{technologie.description}</p>
						</div>
					</a>
				))}
			</div>
		</section>
	);
};

export default Projects;
