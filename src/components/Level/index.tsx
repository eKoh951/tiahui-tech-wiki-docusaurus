import React from 'react';
import LevelIcon from '../LevelIcon';
import LevelDetails from '../LevelDetails';

type LevelProps = {
	id: number;
	title: string;
	duration: string;
	summary: string;
	bullets: string[];
	details: {
		description: string;
		responsibilities: string[];
		technicalSkills: string[];
		leadershipImpact: string[];
	};
};

const Level: React.FC<LevelProps> = ({ id, title, duration, summary, bullets, details }) => (
	<div className={`level level-${id}`}>
		<div className="level-header">
			<div className="level-title">
				<h2>{title}</h2>
			</div>
			<span className="duration" title="Tiempo estimado, puede variar según tus logros">~{duration}</span>
		</div>
		<div className="level-content">
			<p>{summary}</p>
			<ul>
				{bullets.map((bullet, index) => (
					<li key={index}>{bullet}</li>
				))}
			</ul>
		</div>
		<LevelIcon level={id} />
		<LevelDetails id={id} {...details} />
	</div>
);

export default Level;