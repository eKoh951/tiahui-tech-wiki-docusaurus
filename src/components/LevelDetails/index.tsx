import React from 'react';

type DetailSectionProps = {
	title: string;
	content: string | string[];
};

type LevelDetailsProps = {
	id: number;
	description: string;
	responsibilities: string[];
	technicalSkills: string[];
	leadershipImpact: string[];
};

const DetailSection: React.FC<DetailSectionProps> = ({ title, content }) => (
	<div className="details-section">
		<h3>{title}</h3>
		{Array.isArray(content) ? (
			<ul>
				{content.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		) : (
			<p>{content}</p>
		)}
	</div>
);

const LevelDetails: React.FC<LevelDetailsProps> = ({ id, description, responsibilities, technicalSkills, leadershipImpact }) => (
	<div className="level-details">
		<input type="checkbox" id={`level-${id}-details`} />
		<label htmlFor={`level-${id}-details`}>Más Información</label>
		<div className="details-content">
			<DetailSection title="Descripción" content={description} />
			<DetailSection title="Responsabilidades" content={responsibilities} />
			<DetailSection title="Habilidades Técnicas" content={technicalSkills} />
			<DetailSection title="Liderazgo e Impacto" content={leadershipImpact} />
		</div>
	</div>
);

export default LevelDetails;