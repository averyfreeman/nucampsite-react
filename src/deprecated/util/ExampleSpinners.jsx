import React, { Fragment, lazy, Suspense } from 'react';
import LoadingIcons from 'react-loading-icons';

const sharedAttrs = {
	color: '#ff35a6',
	width: '1rem',
	opacity: 1,
	fillOpacity: 0.5,
	speed: 0.8,
};

const ExampleSpinners = () => {
	return (
		<Fragment className="text-danger">
			<LoadingIcons.Audio
				speed={sharedAttrs.speed}
				stroke={sharedAttrs.color}
				strokeWidth={sharedAttrs.width}
				opacity={sharedAttrs.opacity}
				fillOpacity={sharedAttrs.fillOpacity}
			/>
			<LoadingIcons.BallTriangle
				speed={sharedAttrs.speed}
				stroke={sharedAttrs.color}
				strokeWidth={sharedAttrs.width}
				opacity={sharedAttrs.opacity}
				fillOpacity={sharedAttrs.fillOpacity}
			/>
			<LoadingIcons.Bars
				speed={sharedAttrs.speed}
				stroke={sharedAttrs.color}
				strokeWidth={sharedAttrs.width}
				opacity={sharedAttrs.opacity}
				fillOpacity={sharedAttrs.fillOpacity}
			/>
			<LoadingIcons.Circles
				speed={sharedAttrs.speed}
				stroke={sharedAttrs.color}
				strokeWidth={sharedAttrs.width}
				opacity={sharedAttrs.opacity}
				fillOpacity={sharedAttrs.fillOpacity}
			/>
			<LoadingIcons.Grid
				speed={sharedAttrs.speed}
				stroke={sharedAttrs.color}
				strokeWidth={sharedAttrs.width}
				opacity={sharedAttrs.opacity}
				fillOpacity={sharedAttrs.fillOpacity}
			/>
			<LoadingIcons.Hearts
				speed={sharedAttrs.speed}
				stroke={sharedAttrs.color}
				strokeWidth={sharedAttrs.width}
				opacity={sharedAttrs.opacity}
				fillOpacity={sharedAttrs.fillOpacity}
			/>
			<LoadingIcons.Oval
				speed={sharedAttrs.speed}
				stroke={sharedAttrs.color}
				strokeWidth={sharedAttrs.width}
				opacity={sharedAttrs.opacity}
				fillOpacity={sharedAttrs.fillOpacity}
			/>
			<LoadingIcons.Puff
				speed={sharedAttrs.speed}
				stroke={sharedAttrs.color}
				strokeWidth={sharedAttrs.width}
				opacity={sharedAttrs.opacity}
				fillOpacity={sharedAttrs.fillOpacity}
			/>
			<LoadingIcons.Rings
				speed={sharedAttrs.speed}
				stroke={sharedAttrs.color}
				strokeWidth={sharedAttrs.width}
				opacity={sharedAttrs.opacity}
				fillOpacity={sharedAttrs.fillOpacity}
			/>
			<LoadingIcons.SpinningCircles
				speed={sharedAttrs.speed}
				stroke={sharedAttrs.color}
				strokeWidth={sharedAttrs.width}
				opacity={sharedAttrs.opacity}
				fillOpacity={sharedAttrs.fillOpacity}
			/>
			<LoadingIcons.TailSpin
				speed={sharedAttrs.speed}
				stroke={sharedAttrs.color}
				strokeWidth={sharedAttrs.width}
				opacity={sharedAttrs.opacity}
				fillOpacity={sharedAttrs.fillOpacity}
			/>
			<LoadingIcons.ThreeDots
				speed={sharedAttrs.speed}
				stroke={sharedAttrs.color}
				strokeWidth={sharedAttrs.width}
				opacity={sharedAttrs.opacity}
				fillOpacity={sharedAttrs.fillOpacity}
			/>
		</Fragment>
	);
};

export default ExampleSpinners;
