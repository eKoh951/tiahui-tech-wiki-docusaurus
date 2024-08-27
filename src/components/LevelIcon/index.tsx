import React from 'react';

type LevelIconProps = {
	level: number;
};

const Star: React.FC = () => (
	<svg viewBox="0 0 24 24" width="20" height="20">
		<path fill="#FFD700" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
	</svg>
);

const LevelIcon: React.FC<LevelIconProps> = ({ level }) => {
	const stars = level - 3;
	const topStars = Math.min(stars, 3);
	const bottomStars = Math.max(stars - 3, 0);

	return (
		<div className="level-icon">
			<div className="top-stars">
				{[...Array(topStars)].map((_, i) => (
					<Star key={i} />
				))}
			</div>
			<svg viewBox="0 0 24 24" width="80" height="80">
				<path fill="#4A5568" d="M8 6a1 1 0 0 1 0 1.414L3.414 12 8 16.586A1 1 0 0 1 6.586 18l-5-5a1 1 0 0 1 0-1.414l5-5A1 1 0 0 1 8 6zm8 0a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 16 16.586L20.586 12 16 7.414A1 1 0 0 1 16 6z" />
			</svg>
			<div className="bottom-stars">
				{[...Array(bottomStars)].map((_, i) => (
					<Star key={i} />
				))}
			</div>
		</div>
	);
};

export default LevelIcon;