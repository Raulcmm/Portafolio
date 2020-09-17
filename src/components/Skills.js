import React from 'react';

//
import { graphql, useStaticQuery } from 'gatsby';

const Skills = () => {
	const data = useStaticQuery(graphql`
		query {
			allDatoCmsSkill {
				nodes {
					id
					name
					keyword
					image {
						url
					}
				}
			}
		}
	`);
	const arrSkills = data.allDatoCmsSkill.nodes;
	return (
		<section className="skills container" id="skills">
			<h2>My skills</h2>
			<div className="container-skills">
				{arrSkills.map((skill) => (
					<div className="skill" key={skill.id}>
						<img key={skill.id} src={skill.image.url} height="100" width="100" alt=""  />
						<small>{skill.name}</small>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
