import React, { useState } from 'react';
import { Carousel, CarouselControl, CarouselItem } from 'reactstrap';

export const PhotosCarousel = (props) => {
	// use this when wired up - was causing error, had to comment out for now:
	// export const PhotosCarousel = ({ items }: { items: { url: string }[] }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const setAnimatingTrue = () => setAnimating(true);
	const setAnimatingFalse = () => setAnimating(false);

	const [photos] = useState(
		(items || []).map((x, i) => ({
			src: i === 0 ? x.url : '',
			dataSrc: x.url,
		})),
	);

	const updateSrcIfNeeded = (index) => {
		if (!photos[index].src) {
			photos[index].src = photos[index].dataSrc;
		}
	};

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
		updateSrcIfNeeded(nextIndex);
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
		updateSrcIfNeeded(nextIndex);
		setActiveIndex(nextIndex);
	};

	if (!photos || photos.length === 0) {
		return <></>;
	}

	const slides = photos.map((x, i) => {
		return (
			<CarouselItem
				onExiting={setAnimatingTrue}
				onExited={setAnimatingFalse}
				key={i}
			>
				<img src={x.src} />
			</CarouselItem>
		);
	});

	return (
		<Carousel
			activeIndex={activeIndex}
			next={next}
			previous={previous}
			autoPlay={false}
			interval={false}
		>
			{slides}
			<CarouselControl
				direction="prev"
				directionText="Previous"
				onClickHandler={previous}
			/>
			<CarouselControl
				direction="next"
				directionText="Next"
				onClickHandler={next}
			/>
		</Carousel>
	);
};
