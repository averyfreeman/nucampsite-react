import React, { Fragment, Suspense } from 'react';
import { VisibilitySensor, useImage } from 'react-image';
import LoadingIcons from 'react-loading-icons';

const sharedAttrs = {
	color: '#ff35a6', // basically pink
	width: '1rem',
	opacity: 1,
	fillOpacity: 0.5,
	speed: 0.8,
};

const LzImage = (props) => {
	const { src } = useImage({
		srcList: props.src,
	});

	return (
		<VisibilitySensor>
			<Suspense fallback={<LoadingIcons.TailSpin />}>
				<img src={src} width="33%" />
			</Suspense>
		</VisibilitySensor>
	);
};

export default LzImage;
